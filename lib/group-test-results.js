const groupTestResults = (tests) => {
  let testResultsGrouped = {}
  
  tests.map(test => {
    let testGroup = (Array.isArray(test.groups))
      ? test.groups.join(' > ')
      : test.group || test.schema || "DEFAULT"

    if (!testResultsGrouped[testGroup]) {
      testResultsGrouped[testGroup] = {
        passed: [],
        warnings: [],
        failed: []
      }
    }

    if (test.passed) {
      if (!testResultsGrouped[testGroup].passed.includes(test))
        testResultsGrouped[testGroup].passed.push(test)
    } else {
      if (test.warning) {
        if (!testResultsGrouped[testGroup].warnings.includes(test))
          testResultsGrouped[testGroup].warnings.push(test)
      } else {
        if (!testResultsGrouped[testGroup].failed.includes(test))
          testResultsGrouped[testGroup].failed.push(test)
      }
    }
  })

  return testResultsGrouped
}

module.exports = {
  groupTestResults
}

