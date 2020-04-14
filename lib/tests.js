const jmespath = require('jmespath')

// Wrapper for the _test() function that tries to work out how
// best to run the test, with a series of fallbacks, so that the
// most specific type of test can be run as possible.
//
// Running the most specific test possible results in more robust
// testing and more useful messages when there are errors.
function runTest(test, structuredData) {
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
    // This case handles tests that don't have any type defined (or have 'any' specified)
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

function _test(test, json) {
  // TEST_DEFAULT_VALUE is useful to be able to set to normalize null/undefined/empty values
  // This is particularly useful when testing metadata properties which would otherwise have
  // different default values depending on the reason for a test failing, depending on if the
  // property is missing, the value is missing or if the value is empty.
  const TEST_DEFAULT_VALUE = ''

  let testPassed = false
  let testError = null
  let path = null

  test.value = TEST_DEFAULT_VALUE

  try {
    path = test.test
    const pathValue = jmespath.search(json, path)

    test.value = test.type === 'metatag'
      ? (pathValue && pathValue[0] && typeof pathValue[0] !== 'undefined') ? pathValue[0] : TEST_DEFAULT_VALUE
      : (pathValue !== null) ? pathValue : TEST_DEFAULT_VALUE

    if (typeof test.expect === 'undefined' || test.expect === true) {
      // If 'expect' is 'true' then a pathValue should exist.
      // If no value for expect then assume is a simple check to see it exists.
      // Note: It's okay if the value is zero, or false but it should not be empty!
      if (test.value !== 0 && test.value !== false && (!test.value || test.value.length === 0)) {
        if (test.autoDetected) {
          // Auto Detected properties by definition must exist, so if
          // the test fail it can only be because they have no value.
          testError = {
            type: 'NULL',
            message: `No value found for "${path}"`,
          }
        } else {
          testError = {
            type: 'NOT_FOUND',
            message: `Could not find "${path}"`,
          }
        }
      } else {
        testPassed = true
      }
    } else if (test.expect === false) {
      // If 'expect' is 'false' then a pathValue SHOULD NOT exist
      if ((pathValue === null) || (test.type === 'metatag' && pathValue && pathValue[0] && typeof pathValue[0] === 'undefined')) {
        testPassed = true
      } else {
        testError = {
          type: 'PROPERTY_SHOULD_NOT_EXIST',
          message: `Property "${path}" should not be defined`,
        }
      }
    } else if (test.value && test.expect instanceof RegExp) {
      // If test is a Regular Expression…
      if (Array.isArray(test.value)) {
        // If value is array and any key matches then test passes
        test.value.map(value => {
          if (value.match(test.expect))
            testPassed = true
        })
      } else {
        // If value is not an array, treat as a string
        testPassed = Boolean(test.value.match(test.expect))
      }

      if (!testPassed) {
        testError = {
          type: 'INVALID_VALUE',
          message: `Failed RegExp test for "${path}"`,
          expected: test.expect,
          found: test.value
        }
      }
    } else if (!test.value || test.value.length === 0) {
      // If item not found (or has no value) then error
      testError = {
        type: 'TEST_FAILED',
        message: `Test "${path}" failed`,
      }
    } else if (test.value == test.expect || (Array.isArray(test.value) && test.value.includes(test.expect))) {
      // If value is found and matches what we expect…
      // …or in the case of metadata, if the returned value is an array 
      // and one of the items matches what we expect then the test passes
        testPassed = true
    } else {
      // If a value is found, but is does not match what we expect then fail
      testError = {
        type: 'INCORRECT_VALUE',
        message: `Incorrect value found for "${path}"`,
        expected: test.expect,
        found: test.value,
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

module.exports = {
  runTest
}