const WAE = require('web-auto-extractor').default
const fetch = require('node-fetch')
const jmespath = require('jmespath');
const validator = require('validator')

const _structuredDataTest = (structuredData, options) => {  
  const presets = options.presets || []

  let tests = options.tests || [] // Contains all tests
  let testsPassed = [] // Only tests that passed
  let testsFailed = [] // Only tests that failed
  let warnings = [] // Warnings

  presets.forEach(preset => {
    if (preset.tests) {
      tests = tests.concat(preset.tests)
    }
  })
  
  tests.forEach(test => {
    test.passed = false
    if (!test.type) test.type = 'any'

    if (test.type == 'metatags') {
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
      const { testPassed, testWarnings, testError } = _test(test, structuredData.jsonld)
      test.passed = testPassed
      if (testWarnings) test.warnings = testWarnings
      if (testError) test.error = testError

      // If was not found in jsonld, look for data in microdata
      if (test.passed === false) {
        const { testPassed, testWarnings, testError } = _test(test, structuredData.microdata)
        test.passed = testPassed
        if (testWarnings) test.warnings = testWarnings
        if (testError) test.error = testError
      }

      // If was not found in jsonld or microdata, look for data in rdfa
      if (test.passed === false) {
        const { testPassed, testWarnings, testError } = _test(test, structuredData.rdfa)
        test.passed = testPassed
        if (testWarnings) test.warnings = testWarnings
        if (testError) test.error = testError
      }

      // If was not found in jsonld or microdata or rdfa, look for data in metatags
      if (test.passed === false) {
        const { testPassed, testWarnings, testError } = _test(test, structuredData.metatags)
        test.passed = testPassed
        if (testWarnings) test.warnings = testWarnings
        if (testError) test.error = testError
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
      structuredData
    })
  } else {
    // If any tests did not pass, reject
    let error = new Error('Validation failed')
    error.type = 'VALIDATION_FAILED'
    error.tests = tests
    error.passed = testsPassed
    error.failed = testsFailed
    error.warnings = warnings
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
    //const result = JSONPath({ path, json })
    //const pathValue = result[0]
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

const structuredDataTestUrl = async (url, options) => {
  const res = await fetch(url)
  const html = await res.text()
  return structuredDataTestHtml(html, { url, res, ...options })
}

const structuredDataTestHtml = async (html, options) => {
  const structuredData = WAE().parse(html)
  return _structuredDataTest(structuredData, { html, ...options })
}

const structuredDataTest = async (input, options) => {
  
  // Convert 'buffer' object to strings
  if (Buffer.isBuffer(input)) {
    input = input.toString('utf8')
  }

  if (typeof(input) === 'string') {
    if (validator.isURL(input)) {
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
  } else {
    const structuredData = input
    return _structuredDataTest(structuredData, options)
  }
}

module.exports = {
  _structuredDataTest,
  structuredDataTest,
  structuredDataTestUrl,
  structuredDataTestHtml
}