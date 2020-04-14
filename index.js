const WAE = require('web-auto-extractor').default
const fetch = require('node-fetch')
const validator = require('validator')
const isStream = require('is-stream')
const getStream = require('get-stream')

const { runTest } = require('./lib/tests')
const { schemas: validSchemas, getSchema } = require('./lib/schemas')
const { getTestsFromPreset } = require('./lib/helpers/presets')
const {
  isSchemaOrgSchema,
  getSchemaTypeAndName,
  addTestsForSchemaOrgSchema,
  findSchemasInStructuredData
} = require('./lib/helpers/schemas')

const _structuredDataTest = async (structuredData, options) => {
  try {
    // By default, will auto-detect data structures and test them for validity
    // If you want to avoid this (e.g. and only perform explicit tests you pass)
    // you can set this to false when using the API to disable this feature.
    // This may mean you miss some errors but may make it easier to debug issues.
    const auto = (options && options.auto === false) ? false : true

    const presetsSpecified = (options && options.presets) ? options.presets : []
    const schemasSpecified = (options && options.schemas) ? options.schemas : []
    const schemasFound = findSchemasInStructuredData(structuredData) // Find schemas in structuredData
    const schemas = [] // All schemas found *or* explicitly specified
    let tests = options.tests || [] // Contains all tests to be run
    let testGroups = []
    let testsPassed = [] // Only tests that passed
    let testsFailed = [] // Only tests that failed
    let testsWarning = [] // Only tests that generated warnings (technically non critical failures)
    let testsOptional = [] // Optional tests (regardless if passed or failed; they do not count towards either)
    let testsSkipped = [] // Only that were skipped

    // Combine schemas found with any schemas specified.
    let arrayOfSchemas = []
    if (auto === true) {
      // When auto is true, automatically combine schemas found with schemas explicitly specified.
      // Schemas found automatically actually take precedent, as we know the type for them already
      // (jsonld, microdata, rdfa, etc) so can easily add the specific tests for them.
      arrayOfSchemas = schemasFound.concat(
        schemasSpecified.filter(schemaSpecified => {
          let [ structuredDataType, schemaName ] = getSchemaTypeAndName(schemaSpecified)
          if (!schemaName)
            schemaName = structuredDataType

          if (schemasFound.includes(schemaName) || schemasFound.includes(schemaSpecified)) {
            return false
          } else { 
            return true
          }
        })
      )
    } else {
      // When auto is false, only test schemas explicitly specified.
      arrayOfSchemas = schemasSpecified
    }

    const schemasWithProperties = {}
    await Promise.all(
      arrayOfSchemas.map(async schema => {
        let [ structuredDataType, schemaName ] = getSchemaTypeAndName(schema)

        if (!schemaName) {
          schemaName = structuredDataType
          structuredDataType = null
        }

        const schemaWithProperties = await getSchema(schemaName)
        if (schemaWithProperties)
          schemasWithProperties[schemaName] = schemaWithProperties
      })
    )

    const metatags = {}
    Object.keys(structuredData.metatags).map(tag => {
      if (tag !== 'undefined')
        metatags[tag] = (structuredData.metatags[tag] !== 'undefined') ? structuredData.metatags[tag] : null
    })

    if (Object.keys(metatags).length > 0) {
      Object.keys(metatags).map(tag => {
        tests.push({
          test: `"${tag}"`,
          type: 'metatag',
          group: 'Metatags',
          description: tag,
          optional: true,
          autoDetected: true
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
      let [ structuredDataType, schemaName ] = getSchemaTypeAndName(schema)

      // Add schema name to list of schemas
      schemas.push(schemaName)

      let schemaGroups = (Object(validSchemas).hasOwnProperty(schemaName)) ? ['Schema.org', schemaName] : [schemaName]
      
      const _addTestsForSchemaOrgProperties = (name, groups, type, props, path, index) => {
        if (props) {
          if (!schemasWithProperties[name]) {
            // If a Schema name is not recognized *and* type / context / itemtype
            // starts with https://schema.org then should result in a warning or error.
            // @TODO Create help page to explain this warning.
            tests.push({
              test: `${name}[${index}]`,
              schema: name,
              //url: `http://example.com/errors/no-tests-found?${encodeURIComponent(name)}`,
              type: structuredDataType || 'any',
              group: name,
              groups: groups,
              expect: false,
              description: 'No tests found for this schema',
              warning: true,
              autoDetected: true
            })
            return
          }

          const schemaProperties = schemasWithProperties[name].properties

          // Automatically add tests for every valid schema proeprty found
          // (and warnings for schemas)
          for (const schemaProperty in schemaProperties) {
            if (props[schemaProperty]) {
              //if (path === null) {
                // @FIXME Only top high level properties!
                const pathToProp =  Array.isArray(path) ? path.concat(schemaProperty) : [schemaProperty]
                const testPath = `${name}[${index}]` + pathToProp.map(pathItem => (/^\d+$/.test(pathItem)) ? `[${pathItem}]` : `."${pathItem}"`).join('')
                let warning = false
                let expect = schemaProperties[schemaProperty].expect || true
                let pending = false
                let description = schemaProperties[schemaProperty].description || pathToProp.map(pathItem => (/^\d+$/.test(pathItem)) ? `[${pathItem}]` : `.${pathItem}`).join('').replace(/^\./, '')
                
                if (schemaProperties[schemaProperty].pending) {
                  description = `${description} is draft schema property`,
                  warning = true
                  expect = false
                  pending = true
                }
                
                // @TODO Add actual test where 'expect' goes, based on properties allowed values - e.g. String, Number, Date, Object
                tests.push({
                  test: testPath,
                  schema: name,
                  url: `https://schema.org/${name}`,
                  type: structuredDataType || 'any',
                  group: name,
                  groups: groups,
                  description,
                  warning,
                  expect,
                  pending,
                  autoDetected: true
                })
            //  }
            }
          }

          for (const propName of Object.keys(props)) {
            const propValue = props[propName]
            const pathToProp =  Array.isArray(path) ? path.concat(propName) : [propName]
            const testPath = `${name}[${index}]` + pathToProp.map(pathItem => (/^\d+$/.test(pathItem)) ? `[${pathItem}]` : `."${pathItem}"`).join('')
            let description = pathToProp.map(pathItem => (/^\d+$/.test(pathItem)) ? `[${pathItem}]` : `.${pathItem}`).join('').replace(/^\./, '')
            const highestLevelProp = pathToProp[0]
    
            if (!schemaProperties[highestLevelProp]) {
              // @FIXME Currently only flags errors if top level proper does not exist
              // i.e. does not find invalid properties in nested schemas
              if (path === null) {
                // Does not error if finds a prop named 'text' on microdata, as that
                // property is added automatically when parsing HTML objects (e.g.
                // is effectively the 'innerHTML' of the element and is allowed).
                if (propName === 'text' && type === 'microdata')
                  return

                tests.push({
                  test: testPath,
                  schema: name,
                  type: structuredDataType || 'any',
                  group: name,
                  groups: groups,
                  description: `${description} is not a valid schema property ${type}`,
                  expect: false,
                  autoDetected: true
                })
              }
            } else {
              if (typeof(propValue) === 'object') {
                _addTestsForSchemaOrgProperties(name, groups, type, propValue, pathToProp, index)
              } else {
                tests.push({
                  test: testPath,
                  schema: name,
                  type: structuredDataType || 'any',
                  group: name,
                  groups: groups,
                  description,
                  optional: true,
                  autoDetected: true
                })
              }
            }
          
          }
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

          schemaInstances.map((schemaInstance, i) => {
            // Only add Schema.org tests for schemas found that are schema.org schemas or if Schema was explcitly specified to be tested
            if (isSchemaOrgSchema(schemaInstance) || schemasSpecified.includes(schemaName)) {
              addTestsForSchemaOrgSchema(tests, schemaName, schemaGroups.concat(`#${i} (${structuredDataType})`), structuredDataType, i)
              _addTestsForSchemaOrgProperties(schemaName, schemaGroups.concat(`#${i} (${structuredDataType})`), structuredDataType, schemaInstance, null, i)
            }
          })
        } else {
          addTestsForSchemaOrgSchema(tests, schemaName, schemaGroups, structuredDataType)
          _addTestsForSchemaOrgProperties(schemaName, schemaGroups.concat(`#0 (${structuredDataType})`), structuredDataType, null, null, 0)
        }
      } else {
        if (!schemaTestsWithoutType.includes(schemaName))
          schemaTestsWithoutType.push(schemaName)
      }
    })

    schemaTestsWithoutType.forEach(schemaName => {
      if (!schemaTestsWithType.includes(schemaName)) {
        const schemaGroups = (Object(validSchemas).hasOwnProperty(schemaName)) ? ['Schema.org', schemaName] : [schemaName]
        addTestsForSchemaOrgSchema(tests, schemaName, schemaGroups)
      }
    })

    // This is a recursive function scoped to this function
    const _addTestsFromPresets = (presets, structuredData, tests, testsSkipped, testGroups, parentPresetUrl) => {
      presets.forEach(preset => {
        if (!preset)
          throw new Error(`Invalid preset specified`)

        if (!preset.name)
          throw new Error(`Preset specified does not have a 'name' (required)`)

        const groups = (Array.isArray(testGroups)) ? testGroups.concat(preset.name) : [preset.name]

        let presetUrl = preset.url || parentPresetUrl || null

        let ignorePreset = false

        if (preset.conditional) {
          // Evaluate `preset.conditional` test against structuredData to see if
          // preset tests should be added (don't run if does not pass)
          const { testPassed } = runTest(preset.conditional, structuredData)
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
              const { testPassed } = runTest(test.conditional, structuredData)
              if (!testPassed)
                skipTest = true
            }

            // If the test doesn't have an explict URL assigned to it but the preset does
            // then assign the URL on the preset (which should point to documentation for
            // preset) to the test, so it is easily acessible when displaying results.
            if (!test.url && presetUrl)
              test.url = presetUrl

            if (skipTest) {
              testsSkipped.push(test)
            } else {
              tests.push(test)
            }
          })
        }

        // If the preset has other presets associated with it, apply them too.
        if (preset.presets)
          _addTestsFromPresets(preset.presets, structuredData, tests, testsSkipped, groups, presetUrl)

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

      const { testPassed, testError } = runTest(test, structuredData)
      test.passed = testPassed
      test.error = testError

      // Delete test.error property if it is null
      if (test.error === null) delete test.error

      // Put test into appropriate array for response object
      if (test.optional === true) {
        testsOptional.push(test)
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
      optional: testsOptional,
      skipped: testsSkipped,
      groups: testGroups,
      schemas: schemasFound.map(schema => { 
        let [ type, name ] = getSchemaTypeAndName(schema)
        return name
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
  } catch (e) {
    console.log("Internal error", e)
  }
}

const structuredDataTestUrl = async (url, options) => {
  const res = await fetch(url)
  const html = await res.text()
  return structuredDataTestString(html, { url, res, ...options })
}

const structuredDataTestString = async (input, options) => {
  // Try to parse the string input as a JSON object.
  //
  // If it is a JSON object, then wrap it in <script> tags and then parse it as HTML.
  // If it is not, then assume it is HTML and try to parse it as it is.
  //
  // This is potentially computationally expensive, but making the call that 
  // performance concerns are secondary to utility in the case of this tool.
  let html = input
  try { html = JSON.parse(input) ? `<script type="application/ld+json">${input}</script>` : input } catch (e) {  }
  return structuredDataTestHtml(html, options)
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
    if (validator.isURL(input, { require_tld: false })) {
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
      return structuredDataTestString(html, options)
    }
  } else if (Buffer.isBuffer(input)) {
    // If is a buffer…
    // Convert buffer to string
    const html = input.toString('utf8')
    return structuredDataTestString(html, options)
  } else if (isStream.readable(input)) {
    // If is a readable stream…
    // Convert readable stream to string
    const html = await getStream(input)
    return structuredDataTestString(html, options)
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

module.exports = {
  _structuredDataTest,
  structuredDataTest,
  structuredDataTestUrl,
  structuredDataTestString,
  structuredDataTestHtml
}