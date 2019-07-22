const WAE = require('web-auto-extractor').default
const fetch = require('node-fetch')
const jmespath = require('jmespath')
const validator = require('validator')
const isStream = require('is-stream')
const getStream = require('get-stream')
const presets = require('./presets')

const _structuredDataTest = (structuredData, options) => {  
  const presetsSpecified = (options && options.presets) ? options.presets : []
  const schemasFound = _findSchemas(structuredData)

  let tests = options.tests || [] // Contains all tests
  let disablePresets = (options && options.disablePresets) ? true : false
  let testsPassed = [] // Only tests that passed
  let testsFailed = [] // Only tests that failed
  let warnings = [] // Warnings
  
  // Add tests for each preset specified to the tests to be performed
  presetsSpecified.forEach(preset => {
    if (preset.tests) {
      tests = tests.concat(preset.tests)
    }
  })
  
  if (disablePresets === false) {
    // Add tests for each schema detected, if we have a preset for it
    schemasFound.forEach(schema => {
      if (presets[schema]) {
        tests = tests.concat(presets[schema].tests)
      }
    })
  }

  tests.forEach(test => {
    test.passed = false
    if (!test.type) test.type = 'any'

    if (test.type == 'metatag') {
      // Look for meta tags`
      const { testPassed, testWarnings, testError } = _test(test, structuredData.metatags)
      test.passed = testPassed
      if (testWarnings) test.warnings = testWarnings
      if (testError) test.error = testError
    } else if (test.type == 'jsonld') {
      // Look for data in jsonld
      const { testPassed, testWarnings, testError } = _test(test, structuredData.jsonld)
      test.passed = testPassed
      if (testWarnings) test.warnings = testWarnings
      if (testError) test.error = testError
    } else if (test.type == 'microdata') {
      // Look for data in microdata
      const { testPassed, testWarnings, testError } = _test(test, structuredData.microdata)
      test.passed = testPassed
      if (testWarnings) test.warnings = testWarnings
      if (testError) test.error = testError
    } else if (test.type == 'rdfa') {
      // Look for data in rdfa
      const { testPassed, testWarnings, testError } = _test(test, structuredData.rdfa)
      test.passed = testPassed
      if (testWarnings) test.warnings = testWarnings
      if (testError) test.error = testError
    } else {
      // Look for data in jsonld, then microdata then rdfa then metatags until found
      // If a test passes, set the test type to reflect where it was found
      const { testPassed, testWarnings, testError } = _test(test, structuredData.jsonld)
      test.passed = testPassed
      if (testWarnings) test.warnings = testWarnings
      if (testError) test.error = testError
      if (testPassed) test.type = 'jsonld'

      // If was not found in jsonld, look for data in microdata
      if (test.passed === false) {
        const { testPassed, testWarnings, testError } = _test(test, structuredData.microdata)
        test.passed = testPassed
        if (testWarnings) test.warnings = testWarnings
        if (testError) test.error = testError
        if (testPassed) test.type = 'microdata'
      }

      // If was not found in jsonld or microdata, look for data in rdfa
      if (test.passed === false) {
        const { testPassed, testWarnings, testError } = _test(test, structuredData.rdfa)
        test.passed = testPassed
        if (testWarnings) test.warnings = testWarnings
        if (testError) test.error = testError
        if (testPassed) test.type = 'rdfa'
      }

      // If was not found in jsonld or microdata or rdfa, look for data in metatags
      if (test.passed === false) {
        const { testPassed, testWarnings, testError } = _test(test, structuredData.metatags)
        test.passed = testPassed
        if (testWarnings) test.warnings = testWarnings
        if (testError) test.error = testError
        if (testPassed) test.type = 'metatag'
      }
    }

    if (test.passed === true) {
      testsPassed.push(test)
    } else if (test.warning) {
      warnings.push(test)
    } else {
      testsFailed.push(test)
    }
  })

  if (testsFailed.length === 0) {
    // If all tests passed, resolve
    return Promise.resolve({ 
      tests,
      passed: testsPassed,
      failed: testsFailed,
      warnings,
      structuredData,
      schemas: schemasFound
    })
  } else {
    // If any tests did not pass, reject
    let error = new Error('Validation failed')
    error.type = 'VALIDATION_FAILED'
    error.tests = tests
    error.passed = testsPassed
    error.failed = testsFailed
    error.warnings = warnings
    error.schemas = schemasFound
    error.structuredData = structuredData
    if (options.url) error.url = options.url
    if (options.res) error.res = options.res
    return Promise.reject(error) 
  }
}

const _test = (test, json) => {
  let testPassed = false
  let testWarnings = null
  let testError = null
  let path = null

  try {
    path = test.test
    const pathValue = jmespath.search(json, path)

    if (test.expect === true) {
      // If 'expect' is 'true' then a pathValue should exist
      if (pathValue.length === 0) {
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
    } else if (pathValue.length === 0) {
      // If item not found (or has no value) then error
      testError = {
        type: 'MISSING_VALUE',
        message: `Could not find value for "${path}"`,
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
      type: 'TEST_FAILED',
      message: `Test "${path}" failed`,
      e
    }
  }

  return {
    testPassed,
    testWarnings,
    testError
  }
}

const _findSchemas = (structuredData) => {
  const schemas = []

  const rdfa = Object.keys(structuredData.rdfa)
  rdfa.map(schema => {
    if (schema !== 'undefined' && !schemas.includes(schema)) schemas.push(schema)
  })

  const microdata = Object.keys(structuredData.microdata)
  microdata.map(schema => {
    if (schema !== 'undefined' && !schemas.includes(schema)) schemas.push(schema)
  })

  const jsonld = Object.keys(structuredData.jsonld)
  jsonld.map(schema => {
    if (schema !== 'undefined' && !schemas.includes(schema)) schemas.push(schema)
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
    // Convert buffer to string
    const html = input.toString('utf8')
    return structuredDataTestHtml(html, options)
  } else if (isStream.readable(input)) {
    // Convert readable stream to string
    const html = await getStream(input)
    return structuredDataTestHtml(html, options)
  } else {
    const structuredData = input
    return _structuredDataTest(structuredData, options)
  }
}

// Fixes a big when finding itemprops in microdata, where the itemprop
// contained more than more property (separated by a space).
// Have not seen this behaviour in examples on Schema.org but is supported
// by the Google Structured Data Testing Tool
// For more info see this issue:
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
  structuredDataTestHtml
}