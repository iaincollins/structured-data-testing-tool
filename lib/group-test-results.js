const groupTestResults = (tests) => {
  let testResultsGrouped = {}
  
  tests.map(test => {
    let testGroup = test.group || test.schema || "DEFAULT"

    if (!testResultsGrouped[testGroup]) {
      testResultsGrouped[testGroup] = {
        passed: [],
        warnings: [],
        failed: []
      }
    }

    if (test.passed) {
      if (!testResultsGrouped[testGroup].passed.includes(test.test))
        testResultsGrouped[testGroup].passed.push(test.test)
    } else {
      if (test.warning) {
        if (!testResultsGrouped[testGroup].warnings.includes(test.test))
          testResultsGrouped[testGroup].warnings.push(test.test)
      } else {
        if (!testResultsGrouped[testGroup].failed.includes(test.test))
          testResultsGrouped[testGroup].failed.push(test.test)
      }
    }
  })

  return testResultsGrouped
}

module.exports = {
  groupTestResults
}

