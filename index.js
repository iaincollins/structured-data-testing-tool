const WAE = require('web-auto-extractor').default
const fetch = require('node-fetch')
const jmespath = require('jmespath')
const validator = require('validator')
const isStream = require('is-stream')
const getStream = require('get-stream')
const { schemas: validSchemas } = require('./lib/schemas')

const _structuredDataTest = (structuredData, options) => {  
  const presetsSpecified = (options && options.presets) ? options.presets : []
  const schemasSpecified = (options && options.schemas) ? options.schemas : []
  const schemasFound = _findSchemas(structuredData) // Find schemas in structuredData
  const schemas = [] // All schemas found *or* explicitly specified
  let tests = options.tests || [] // Contains all tests to be run
  let testGroups = []
  let testsPassed = [] // Only tests that passed
  let testsFailed = [] // Only tests that failed
  let testsWarning = [] // Only tests that generated warnings (technically non critical failures)
  let testsInfo = [] // Only tests that generate info messages (technically passed, but not necessarily positive)
  let testsSkipped = [] // Only that were skipped

  // Combine schemas found with any schemas specified.
  // Schemas found automatically take precedent, as we know the type for them already
  // (jsonld, microdata, rdfa, etc) so can easily add the specific tests for them.
  const arrayOfSchemas = schemasFound.concat(
    schemasSpecified.filter(schemaSpecified => {
      let [ structuredDataType, schemaName ] = schemaSpecified.split(':')
      if (!schemaName)
        schemaName = structuredDataType

      if (schemasFound.includes(schemaName) || schemasFound.includes(schemaSpecified)) {
        return false
      } else { 
        return true
      }
    })
  )

  const metatags = {}
  Object.keys(structuredData.metatags).map(tag => {
    if (tag !== 'undefined')
      metatags[tag] = structuredData.metatags[tag]
  })

  if (Object.keys(metatags).length > 0) {
    Object.keys(metatags).map(tag => {
      tests.push({
        test: `"${tag}"`,
        type: 'metatag',
        group: 'Metatags',
        description: tag,
        info: true
      })
    })
  }

  let schemaTestsWithoutType = []
  let schemaTestsWithType = []
  arrayOfSchemas.forEach(schema => {
    // Schema names can optionally have a suffix to indicate how it should be declared.
    // A schema can just be the schema name like 'Article', but it can also be 
    // 'jsonld:Article', 'microdata:Article' or 'rdfa:Article' if you wanted to check
    // for a schema specified on a page in a particular way.
    let [ structuredDataType, schemaName ] = schema.split(':')

    if (!schemaName) {
      schemaName = structuredDataType
      structuredDataType = null
    }
    
    // Add schema name to list of schemas
    schemas.push(schemaName)

    let schemaGroups = (Object(validSchemas).hasOwnProperty(schemaName)) ? ['Schema.org', schemaName] : [schemaName]
    
    const _addTestsForProperties = (name, groups, type, props, path, index) => {
      if (props) {
        Object.keys(props).map(propName => {
          // @TODO Add test to check if prop contents is valid
          const propValue = props[propName]
          const pathToProp =  (Array.isArray(path)) ? path.concat(propName) : [propName]

          if (typeof(propValue) === 'object') {
            _addTestsForProperties(name, groups, type, propValue, pathToProp, index)
          } else {
            const testPath = `${name}[${index}]` + pathToProp.map(pathItem => (/^\d+$/.test(pathItem)) ? `[${pathItem}]` : `."${pathItem}"`).join('')
            const description = pathToProp.map(pathItem => (/^\d+$/.test(pathItem)) ? `[${pathItem}]` : `.${pathItem}`).join('').replace(/^\./, '')
            tests.push({
              test: testPath,
              schema: name,
              type: structuredDataType || 'any',
              group: name,
              groups: groups,
              description,
              info: true
            })
          }
        })
      }
    }

    // If there is more than one schema of the same type on a page, then group
    // them by putting them in subgroups named #0, #1, #2… etc. so that the results
    // for each instances of a schema are easy to iterate over.
    if (structuredDataType) {
      if (!schemaTestsWithType.includes(schemaName))
        schemaTestsWithType.push(schemaName)

      if (structuredData[structuredDataType][schemaName]) {
        const schemaInstances = structuredData[structuredDataType][schemaName]

        if (schemaInstances.length === 1) {
          _addTestsForSchema(tests, schemaName, schemaGroups, structuredDataType, 0)
          _addTestsForProperties(schemaName, schemaGroups, structuredDataType, schemaInstances[0], null, 0)
        } else {
          schemaInstances.map((schemaInstance, i) => {
            _addTestsForSchema(tests, schemaName, schemaGroups.concat(`#${i}`), structuredDataType, i)
            _addTestsForProperties(schemaName, schemaGroups.concat(`#${i}`), structuredDataType, schemaInstance, null, i)
          })
        }
      } else {
        _addTestsForSchema(tests, schemaName, schemaGroups, structuredDataType)
      }
    } else {
      if (!schemaTestsWithoutType.includes(schemaName))
        schemaTestsWithoutType.push(schemaName)
    }
  })

  schemaTestsWithoutType.forEach(schemaName => {
    if (!schemaTestsWithType.includes(schemaName)) {
      const schemaGroups = (Object(validSchemas).hasOwnProperty(schemaName)) ? ['Schema.org', schemaName] : [schemaName]
      _addTestsForSchema(tests, schemaName, schemaGroups)
    }
  })

  // This is a recursive function scoped to this function
  const _addTestsFromPresets = (presets, structuredData, tests, testsSkipped, testGroups) => {
    presets.forEach(preset => {
      if (!preset.name) {
        throw new Error(`Preset specified does not have a 'name' (required)`)
      }

      const groups = (Array.isArray(testGroups)) ? testGroups.concat(preset.name) : [preset.name]

      let ignorePreset = false

      if (preset.conditional) {
        // Evaluate `preset.conditional` test against structuredData to see if
        // preset tests should be added (don't run if does not pass)
        const { testPassed } = _runTest(preset.conditional, structuredData)
        if (!testPassed)
          ignorePreset = true
      }

      // Ignore all tests in preset if the preset conditional does not pass
      if (!ignorePreset) {
        // Loop through all tests in preset, but only add the ones that either don't have
        // a conditional tests or where the conditional test passes.
        getTestsFromPreset(preset, structuredData, groups).forEach(test => {
          let skipTest = false

          // Evaluate `test.conditional` test against structuredData to see if
          // test should be added (add test to skipped tests if not)
          if (test.conditional) {
            const { testPassed } = _runTest(test.conditional, structuredData)
            if (!testPassed)
              skipTest = true
          }

          if (skipTest) {
            testsSkipped.push(test)
          } else {
            tests.push(test)
          }
        })
      }

      // If the preset has other presets associated with it, apply them too.
      if (preset.presets) {
        _addTestsFromPresets(preset.presets, structuredData, tests, testsSkipped, groups)
      }
    })
  }
  
  // Add tests for each preset specified to the tests to be performed.
  // This function is recursive to handle presets with other presets (to any depth level)
  _addTestsFromPresets(presetsSpecified, structuredData, tests, testsSkipped)

  tests.forEach(test => {
    test.passed = false
    if (!test.type) test.type = 'any'

    if (test.group && !testGroups.includes(test.group))
      testGroups.push(test.group)

    const { testPassed, testError } = _runTest(test, structuredData)
    test.passed = testPassed
    test.error = testError

    // Delete test.error property if it is null
    if (test.error === null) delete test.error

    // Put test into appropriate array for response object
    if (test.passed === true && test.info === true) {
      testsInfo.push(test)
    } else if (test.passed === true) {
      testsPassed.push(test)
    } else if (test.warning) {
      testsWarning.push(test)
    } else {
      testsFailed.push(test)
    }
  })

  // Create response object
  const response = {
    tests,
    passed: testsPassed,
    failed: testsFailed,
    warnings: testsWarning,
    info: testsInfo,
    skipped: testsSkipped,
    groups: testGroups,
    schemas: schemasFound.map(schema => { 
      const splitResult = schema.split(':')
      return (splitResult[1]) ? splitResult[1] : splitResult[0]
    }),
    structuredData,
    options,
  }

  if (testsFailed.length === 0) {
    // If all tests passed, resolve promise
    return Promise.resolve(response)
  } else {
    // If any tests did not pass, reject promise
    let error = new Error('Validation failed')
    error.type = 'VALIDATION_FAILED'
    error.res = response
    return Promise.reject(error) 
  }
}

const _test = (test, json) => {
  let testPassed = false
  let testError = null
  let path = null

  try {
    path = test.test
    const pathValue = jmespath.search(json, path)
    test.value = pathValue

    if (typeof test.expect === 'undefined' || test.expect === true) {
      // If 'expect' is 'true' then a pathValue should exist.
      // If no value for expect then assume is a simple check to see it exists.
      // Note: It's okay if the value is zero, or false but it should not be empty!
      if (pathValue !== 0 && pathValue !== false && (!pathValue || pathValue.length === 0)) {
        testError = {
          type: 'MISSING_PROPERTY',
          message: `Could not find "${path}"`,
        }
      } else {
        testPassed = true
      }
    } else if (test.expect === false) {
      // If 'expect' is 'false' then a pathValue SHOULD NOT exist
      if (pathValue !== null) {
        testError = {
          type: 'PROPERTY_SHOULD_NOT_EXIST',
          message: `The property "${path}" should not be defined`,
        }
      } else {
        testPassed = true
      }
    } else if (pathValue && test.expect instanceof RegExp) {
      // If test is a Regular Expression…
      if (Array.isArray(pathValue)) {
        // If value is array and any key matches then test passes
        pathValue.map(value => {
          if (value.match(test.expect))
            testPassed = true
        })
      } else {
        // If value is not an array, treat as a string
        testPassed = pathValue.match(test.expect)
      }

      if (!testPassed) {
        testError = {
          type: 'REGEXP_FAILED',
          message: `Failed RegExp test for "${path}"`,
          expected: test.expect,
          found: pathValue
        }
      }
    } else if (!pathValue || pathValue.length === 0) {
      // If item not found (or has no value) then error
      testError = {
        type: 'TEST_FAILED',
        message: `Test "${path}" failed`,
      }
    } else if (pathValue == test.expect || (Array.isArray(pathValue) && pathValue.includes(test.expect))) {
      // If value is found and matches what we expect…
      // …or in the case of metadata, if the returned value is an array 
      // and one of the items matches what we expect then the test passes
        testPassed = true
    } else {
      // If a value is found, but is does not match what we expect then fail
      testError = {
        type: 'INCORRECT_VALUE',
        message: `Incorrect value for "${path}"`,
        expected: test.expect,
        found: pathValue
      }
    }
  } catch (e) {
    testError = {
      type: 'TEST_ERROR',
      message: `Error evaluating test "${path}", check test syntax`,
      e
    }
  }

  return {
    testPassed,
    testError
  }
}

const _runTest = (test, structuredData) => {
  if (test.type == 'metatag') {
    // Look for meta tags`
    return _test(test, structuredData.metatags)
  } else if (test.type == 'jsonld') {
    // Look for data in jsonld
    return _test(test, structuredData.jsonld)
  } else if (test.type == 'microdata') {
    // Look for data in microdata
    return _test(test, structuredData.microdata)
  } else if (test.type == 'rdfa') {
    // Look for data in rdfa
    return _test(test, structuredData.rdfa)
  } else if (test.type == 'any' || !Object(test).hasOwnProperty('type')) {
    let result = {}

    // Look for data in jsonld, then microdata then rdfa then metatags until found
    // If a test passes, set the test type to reflect where it was found
    result = _test(test, structuredData.jsonld)
    if (result.testPassed) {
      test.type = 'jsonld'
      return result
    }

    // If was not found in jsonld, look for data in microdata
    result = _test(test, structuredData.microdata)
    if (result.testPassed) {
      test.type = 'microdata'
      return result
    }

    // If was not found in jsonld or microdata, look for data in rdfa
    result = _test(test, structuredData.rdfa)
    if (result.testPassed) {
      test.type = 'rdfa'
      return result
    }

    // If was not found in jsonld or microdata or rdfa, look for data in metatags
    result = _test(test, structuredData.metatags)
    if (result.testPassed) {
      test.type = 'metatag'
      return result
    }

    // If property not found anywhere
    return {
      testPassed: false,
      testError: {
        type: 'NOT_FOUND',
        message: `The property "${test.test}" was not found`,
      }
    }
  } else {
    return {
      testPassed: false,
      testError: {
        type: 'INVALID_TYPE',
        message: `The type "${test.type}" is invalid`,
      }
    }

  }
}

const _findSchemas = (structuredData) => {
  const schemas = []

  const rdfa = Object.keys(structuredData.rdfa)
  rdfa.map(schema => {
    if (schema !== 'undefined' && !schemas.includes(schema)) schemas.push(`rdfa:${schema}`)
  })

  const microdata = Object.keys(structuredData.microdata)
  microdata.map(schema => {
    if (schema !== 'undefined' && !schemas.includes(schema)) schemas.push(`microdata:${schema}`)
  })

  const jsonld = Object.keys(structuredData.jsonld)
  jsonld.map(schema => {
    if (schema !== 'undefined' && !schemas.includes(schema)) schemas.push(`jsonld:${schema}`)
  })

  return schemas
}

const structuredDataTestUrl = async (url, options) => {
  const res = await fetch(url)
  const html = await res.text()
  return structuredDataTestHtml(html, { url, res, ...options })
}

const structuredDataTestHtml = async (html, options) => {
  let structuredData = WAE().parse(html)
  structuredData = __transformStructuredData(structuredData)
  return _structuredDataTest(structuredData, { html, ...options })
}

const structuredDataTest = async (input, options) => {
  if (typeof(input) === 'string') {
    // If is a string…
    // Assumed to be URL or HTML
    if (validator.isURL(input)) {
      // @TODO Improve URL error handling
      const url = input
      const res = await fetch(url)
      const html = await res.text()
      if (!html) {
        let error = new Error('No HTML returned')
        error.type = 'HTML_EMPTY'
        throw error
      }
      return structuredDataTestUrl(url, options)
    } else {
      const html = input
      return structuredDataTestHtml(html, options)
    }
  } else if (Buffer.isBuffer(input)) {
    // If is a buffer…
    // Convert buffer to string
    const html = input.toString('utf8')
    return structuredDataTestHtml(html, options)
  } else if (isStream.readable(input)) {
    // If is a readable stream…
    // Convert readable stream to string
    const html = await getStream(input)
    return structuredDataTestHtml(html, options)
  } else {
    // Else ??
    const structuredData = input
    return _structuredDataTest(structuredData, options)
  }
}

// Fixes a big when finding itemprops in microdata, where the itemprop
// contained more than more property (separated by a space).
// Have not seen this behaviour in examples on Schema.org but is supported
// by the Google Structured Data Testing Tool. For more info see:
// https://github.com/glitchdigital/structured-data-testing-tool/issues/4
const __transformStructuredData = (structuredData) => {
  let result = structuredData
  Object.keys(result.microdata).forEach(schema => {
    result.microdata[schema].forEach(object => {
      Object.keys(object).forEach(key => {
        if (key.includes(' ')) {
          key.split(' ').forEach(newKey => {
            object[newKey] = object[key]
          })
          delete object[key]
        }
      })
    })
  })
  return result
}

const getTestsFromPreset = (preset, structuredData, testGroup) => {
  const tests = []

  if (!preset.tests)
    return tests

  const _setTestGroup = (test, preset) => {
    // If test does not explicitly have a group defined, use the the default one preset,
    // if defined. If no default group is is defined for the preset, fallback to using
    // the preset name to group the results (every preset SHOULD have a name!)
    if (!test.group) {
      if (preset.group) {
        test.group = preset.group
      } else if (preset.name) {
        test.group = preset.name
      } else {
        test.group = 'DEFAULT'
      }
    }
  }

  if (preset.schema) {
    // If preset has a schema, return tests that check every instance of that schema
    Object.keys(structuredData).map(dataType => {
      if (dataType === 'metatags')
        return
      Object.keys(structuredData[dataType]).map((schemaName) => {
        if (schemaName === preset.schema) {
          structuredData[dataType][schemaName].forEach((instance, i) => {
            const groups = testGroup.concat(`#${i} (${dataType})`)

            preset.tests.forEach(t => {
              // Note: Must copy object so we can re-use tests objects from a preset in different tests
              const test = Object.assign({}, t)
              test.schema = preset.schema
              test.test = test.test.replace(/(.*)?\[\*\]/, `${preset.schema}[${i}]`)
              test.type = dataType
              test.groups = groups
              test.description = test.test.replace(/(.*)?\[\d\]\./, '').replace(/"/g, '')
              tests.push(test)
            })
          })
        }
      })
    })
  } else {
    // If preset does not have a schema, then return only the tests in the preset
    preset.tests.forEach(test => {
      _setTestGroup(test, preset)
      tests.push(test)
    })
  }

  return tests
}

// Add a test for any schema explicitly specified (or that was detected)
const _addTestsForSchema = (tests, name, groups, type, index) => {
  tests.push({
    test: `${name}[${(typeof(index) === 'undefined') ? '*': index}]`,
    schema: name,
    type: type || 'any',
    group: name,
    groups: groups,
    description: (type) ? `schema in ${type}` : `schema found`
  })
}

module.exports = {
  _structuredDataTest,
  structuredDataTest,
  structuredDataTestUrl,
  structuredDataTestHtml
}