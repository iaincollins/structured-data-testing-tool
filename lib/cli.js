const chalk = require('chalk')
const columnify = require('columnify')
const presets = require('../presets')

const info = chalk.white
const success = chalk.green
const warn = chalk.keyword('orange')
const error = chalk.red.bold

function printTestResults(testResult) {

  const totalTests = testResult.passed.length + testResult.warnings.length + testResult.failed.length

  let testResultsGrouped = {}
  
  testResult.tests.map(test => {
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

  console.log(`Tests\n`)

  if (Object.keys(testResultsGrouped).length === 0) {
    console.log(info('  No tests run.\n'))
  } else {
    Object.keys(testResultsGrouped).map(group => {
      const numberOfTestsInGroup = testResultsGrouped[group].passed.length + testResultsGrouped[group].warnings.length + testResultsGrouped[group].failed.length
      const percentageTestPassed = Math.floor((testResultsGrouped[group].passed.length / numberOfTestsInGroup) * 100)

      console.log(
        ' ',
        (testResultsGrouped[group].failed.length > 0) ? chalk.red.bold(`${group}`) : chalk.green.bold(`${group}`),
        info(`Passed ${testResultsGrouped[group].passed.length } of ${numberOfTestsInGroup} (${percentageTestPassed}%)`)
      )
      testResultsGrouped[group].passed.map(test => {
        console.log(success(`    ✓ `), info(`${test}`.replace(/""/g, '\'')))
      })
      testResultsGrouped[group].warnings.map(test => {
        console.log(warn(`    • `), info(`${test}`.replace(/""/g, '\'')))
      })
      testResultsGrouped[group].failed.map(test => {
        console.log(error(`    ✕ `), info(`${test}`.replace(/""/g, '\'')))
      })
      console.log('')
    })
  }

  console.log(`Statistics\n`)
  console.log(info(`  Number of Metatags:`), `${Object.keys(testResult.structuredData.metatags).length || 0}`)
  console.log(info(`  Schemas in JSON-LD:`), `${Object.keys(testResult.structuredData.jsonld).length || 0}`)
  console.log(info(`     Schemas in HTML:`), `${Object.keys(testResult.structuredData.microdata).length || 0}`)
  console.log(info(`      Schema in RDFa:`), `${Object.keys(testResult.structuredData.rdfa).length || 0}`)
  console.log(info(`       Schemas found:`), `${testResult.schemas.join(', ') || 0}`)
  console.log(info(`    Test groups run :`), `${Object.keys(testResultsGrouped).join(', ') || 0}`)
  console.log(info(`     Total tests run:`), `${totalTests}`)
  console.log('')
  console.log(`Results\n`)
  console.log(info(`    Passed:`), `${testResult.passed.length}`, info(`(${Math.floor((testResult.passed.length / totalTests) * 100) || 0}%)`))
  console.log(info(`  Warnings:`), `${testResult.warnings.length}`, info(`(${Math.floor((testResult.warnings.length / totalTests) * 100) || 0}%)`))
  console.log(info(`    Failed:`), `${testResult.failed.length}`, info(`(${Math.floor((testResult.failed.length / totalTests) * 100) || 0}%)`))
  console.log('')

  if (totalTests === 0) {
    console.log(info(`  No tests run.\n`))
  } else if (testResult.failed.length === 0) {
    console.log(success(`  ✓ ${totalTests} tests passed with ${testResult.warnings.length} warnings.\n`))
  } else {
    console.error(chalk.red.bold(`  ✕ ${testResult.failed.length} of ${totalTests} tests failed with ${testResult.warnings.length} warnings.\n`))
  }
}

function printSupportedPresets() {
  console.log('The following presets are supported:\n')
  let data = {}
  Object.keys(presets).map(preset => data[preset] = presets[preset].description)
  console.log(columnify(
    data,
    {
      columns: ['NAME', 'DESCRIPTION'],
      config: {
        NAME: { minWidth: 25, dataTransform(data) { return chalk.bold(data) }},
        DESCRIPTION: { maxWidth: 95, dataTransform(data) { return info(data) }},
      }
    }
  ))
  console.log('')
}

module.exports = {
  info,
  success,
  warn,
  error,
  printTestResults,
  printSupportedPresets
}
