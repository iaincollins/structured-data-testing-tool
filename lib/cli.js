const chalk = require('chalk')
const columnify = require('columnify')
const { groupTestResults } = require('./group-test-results')
const presets = require('../presets')
const { getSchema, schemas } = require('./schemas')

const info = chalk.white
const meta = chalk.keyword('aqua')
const success = chalk.green
const warn = chalk.keyword('orange')
const error = chalk.red.bold

function printTestResults(testResult, options) {
  const showInfo = (options && options.showInfo) ? true : false

  // Calculate total number of tests run
  const totalTests = testResult.passed.length + testResult.warnings.length + testResult.failed.length

  // Group test results by test 'group' property to make them easy to iterate over.
  // If no group specified for test, uses test.schema, if no test.schema specified uses 'DEFAULT'.
  //
  // NB: If test is a preset it will be assigned a group of preset.group.
  // If no preset.group specified, falls back to preset.schema, preset.name then 'DEFAULT'.
  const testResultsGrouped = groupTestResults(testResult.tests)
  
  console.log(`Tests\n`)

  // Loop through grouped test results and display output
  if (Object.keys(testResultsGrouped).length === 0) {
    console.log(info('  No tests run.\n'))
  } else {
    Object.keys(testResultsGrouped).map(group => {
      if (showInfo || (
        testResultsGrouped[group].passed.length > 0 || 
        testResultsGrouped[group].warnings.length > 0 ||
        testResultsGrouped[group].failed.length > 0)
      ) {
        const numberOfTestsInGroup = testResultsGrouped[group].passed.length + testResultsGrouped[group].warnings.length + testResultsGrouped[group].failed.length
        const percentageTestPassed = Math.floor((testResultsGrouped[group].passed.length / numberOfTestsInGroup) * 100) || 0
  
        // Display in red if any tests failed, otherwise display green.
        let testGroupName = group
        if (testResultsGrouped[group].failed.length > 0) {
          testGroupName = chalk.red.bold(`${group}`)
        } else {
          testGroupName = chalk.green.bold(`${group}`)
        }

        console.log(
          `  ${testGroupName}`,
          (numberOfTestsInGroup) ? info(`- ${percentageTestPassed}% (${testResultsGrouped[group].passed.length } passed, ${numberOfTestsInGroup} total)`) : ''
        )

        testResultsGrouped[group].passed.map(test => {
          const testDescription = (test.description) ? test.description : test.test
          console.log(success(`    ✓ `), info(testDescription.replace(/""/g, '\'')))
        })
        if (showInfo) {
          testResultsGrouped[group].info.map(test => {
            const testDescription = (test.description) ? test.description : test.test
            console.log(meta(`    ⃟ `), info(testDescription.replace(/""/g, '\'')))
          })
        }
        testResultsGrouped[group].warnings.map(test => {
          const testDescription = (test.description) ? `${test.description} [${test.test}]` : test.test
          console.log(warn(`    • `), info(testDescription.replace(/""/g, '\'')))
        })
        testResultsGrouped[group].failed.map(test => {
          const testDescription = (test.description) ? `${test.description} [${test.test}]` : test.test
          console.log(error(`    ✕ `), info(testDescription.replace(/""/g, '\'')))
        })
        console.log('')
      }
    })
  }

  const schemaOrgSchemas = []
  const otherSchemas = []
  testResult.schemas.map(schema => {
    getSchema(schema) ? schemaOrgSchemas.push(schema) : otherSchemas.push(schema)
  })

  console.log(`Statistics\n`)
  console.log(info(`  Number of Metatags:`), `${Object.keys(testResult.structuredData.metatags).length || 0}`)
  console.log(info(`  Schemas in JSON-LD:`), `${Object.keys(testResult.structuredData.jsonld).length || 0}`)
  console.log(info(`     Schemas in HTML:`), `${Object.keys(testResult.structuredData.microdata).length || 0}`)
  console.log(info(`      Schema in RDFa:`), `${Object.keys(testResult.structuredData.rdfa).length || 0}`)
  console.log(info(`  Schema.org schemas:`), `${schemaOrgSchemas.join(', ') || 0}`)
  console.log(info(`       Other schemas:`), `${otherSchemas.join(', ') || 0}`)
  console.log(info(`    Test groups run :`), `${Object.keys(testResultsGrouped).length || 0}`)
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
  console.log('The following presets are built-in:\n')
  let data = {}
  Object.keys(presets).map(preset => {
    if (preset.startsWith('_')) return
    data[preset] = presets[preset].description
  })
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

function printListSchemas() {
  console.log('Valid Schema.org schemas:\n')
  let data = []
  let i = 0
  for (const schemaName in schemas) {
    const schema = schemas[schemaName]
    const hasPreset = presets[schemaName] ? true : false
    let name = schemaName
    
    let indentChar = '└'
    const nextSchemaName = (schemas[Object.keys(schemas)[i + 1]]) ? schemas[Object.keys(schemas)[i + 1]].name : null
    if ((nextSchemaName && schemas[nextSchemaName].subClassOf == schema.subClassOf) ||
        (nextSchemaName && schemas[nextSchemaName].subClassOf == schemaName)) {
      indentChar = '├'
    }

    if (schema.depth === 1) {
      name = indentChar + ' ' + schemaName
    } else if (schema.depth > 1) {
      name = '| '.repeat(schema.depth - 1) + indentChar + ' ' + schemaName
    }

    data.push({
      ' ': (hasPreset) ? chalk.green.bold('✓') : ' ',
      name: (hasPreset)
        ? chalk.green(name)
        : chalk.white(name),
      'subclass': (schema.subClassOf) ? info(`(${schema.subClassOf})`) : '--',
      description: info(schema.description)
    })
    i++
  }
  console.log(columnify(
    data,
    {
      truncate: true,
      config: {
        description: { maxWidth: 75 },
        ' ': {
          minWidth: 1,
          maxWidth: 1,
          align: 'right'
        },
      }
    }
  ))
  console.log('\n')
  console.log(`Schemas with built-in preset support are displayed with a green tick (${chalk.green.bold('✓')}) next to them.`)
  console.log('Schema information reproduced from schema.org under the Apache License 2.0.')
  console.log('For more information about these schemas, see https://schema.org\n')
}

module.exports = {
  info,
  success,
  warn,
  error,
  printTestResults,
  printSupportedPresets,
  printListSchemas
}
