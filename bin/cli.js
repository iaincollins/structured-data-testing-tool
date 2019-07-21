#! /usr/bin/env node
const yargs = require(`yargs`)
const chalk = require('chalk')
const fs = require('fs')
const { structuredDataTest } = require('../index')
const presets = require('../presets')
const Package = require('../package')
const { info, error, printTestResults, printSupportedPresets } = require('../lib/cli')

;(async () => {

  let testInput = null
  let testOptions = { presets: [] }

  // Get input arguments
  if (yargs.argv.file || yargs.argv.f) {
    // Get path to file input
    try {
      testInput = fs.readFileSync(yargs.argv.file || yargs.argv.f)
    } catch (e) {
      console.error(error(`Error: Unable to open file '${yargs.argv.file || yargs.argv.f}'`))
      return
    }
  } else if (yargs.argv.url || yargs.argv.u) {
    // Get URL argument
    testInput = yargs.argv.url || yargs.argv.u
  }

  // Parse presets of provided, and halt on error when parsing them
  if (yargs.argv.presets || yargs.argv.p) {

    // If --presets or -p is passed with no arguments, display supported preset
    if ((yargs.argv.presets && yargs.argv.presets === true) || (yargs.argv.p && yargs.argv.p === true)) {
      printSupportedPresets()
      return
    }

    let presetErrors = []
    const presetArgs = yargs.argv.presets || yargs.argv.p
    presetArgs.split(',').map(preset => {
      if (presets[preset.trim()]) {
        testOptions.presets.push(presets[preset.trim()])
      } else {
        presetErrors.push(`Error: "${preset.trim()}" is not a valid preset.`)
      }
    })

    // If errors, display them and exit
    if (presetErrors.length > 0) {
      printSupportedPresets()
      presetErrors.map(err => console.error(error(err)))
      return
    }
  }

  if (testInput) {
    // Run test
    await structuredDataTest(testInput, testOptions)
    .then(response => {
      printTestResults(response)
    })
    .catch(err => {
      if (err.type === 'VALIDATION_FAILED') {
        printTestResults(err)
      } else {
        // Handle other errors (e.g. fetching URL)
        throw err
      }
    })
    return
  }

  // } else if (yargs.argv.config && yargs.argv.config !== true) {
  //   console.log("CONFIG TEST")
  //   return
 
  yargs
  .usage(`Usage: ${ chalk.yellowBright('$0 --url <url> [--presets <presets>]')}`)
  // .option('c', {
  //   alias: 'config',
  //   description: 'Use configuration file'
  // })
  .option('u', {
    alias: 'url',
    description: 'Inspect a URL'
  })
  .implies('--url', '--presets')
  .option('f', {
    alias: 'file',
    description: 'Inspect a file'
  })
  .implies('--file', '--presets')
  .option('p', {
    alias: 'presets',
    description: 'Test a URL for specific markup from a list of presets'
  })
  .help('h')
  .alias('h', 'help')
  .version(Package.version)
  .alias('v', 'version')
  .showHelpOnFail(true)
  .demandOption('--url or --file')
  .hide('--url or --file')
  //.example(chalk.cyan(`$0 --config path/to/config.js`), chalk.grey('Load URL(s) and tests from a configuration file'))
  .example(chalk.cyan(`$0 --url "https://example.com/article"`), chalk.grey('Inspect a URL'))
  .example(chalk.cyan(`$0 --url <url> --presets "Article,Twitter,Facebook"`), chalk.grey('Test a URL for Article schema and social metatags'))
  .example(chalk.cyan(`$0 --presets`), chalk.grey('List supported presets'))
  .wrap(120)
  .argv
})()

