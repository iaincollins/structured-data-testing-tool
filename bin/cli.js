#! /usr/bin/env node
const yargs = require(`yargs`)
const chalk = require('chalk')
const { structuredDataTest } = require('../index')
const presets = require('../presets')
const Package = require('../package')

;(async () => {
  const info = chalk.white
  const success = chalk.green
  const error = chalk.red
  const warn = chalk.keyword('orange')

  if ((yargs.argv.url && yargs.argv.url !== true) || yargs.argv.u && yargs.argv.u !== true) {
    const url = yargs.argv.url || yargs.argv.u
    const options = { presets: [] }

    let presetError = false
    if ((yargs.argv.presets && yargs.argv.presets !== true) || (yargs.argv.p && yargs.argv.p !== true)) {
      const presetArgs = yargs.argv.presets || yargs.argv.p
      presetArgs.split(',').map(preset => {
        if (presets[preset.trim()]) {
          options.presets.push(presets[preset.trim()])
        } else {
          presetError = true
          console.log(error(`Error: "${preset.trim()}" is not a valid preset.`));
        }
      })
    }
    if (presetError === true) return // halt on invalid preset

    if (options.presets.length === 0) {
      await structuredDataTest(url, options)
      .then(response => {

        const metatags = Object.keys(response.structuredData.metatags)
        console.log(`Found ${metatags.length} metatags.\n`)
        if (metatags.length > 0) {
          metatags.map(metatag => {
            if (metatag !== 'undefined') console.log(info(`  ${metatag}`))
          })
          console.log(' ')
        }
        
        const schemas = []

        const rdfa = Object.keys(response.structuredData.rdfa)
        rdfa.map(schema => {
          if (!schemas.includes(schema)) schemas.push(schema)
        })

        const microdata = Object.keys(response.structuredData.microdata)
        microdata.map(schema => {
          if (!schemas.includes(schema)) schemas.push(schema)
        })

        const jsonld = Object.keys(response.structuredData.jsonld)
        jsonld.map(schema => {
          if (!schemas.includes(schema)) schemas.push(schema)
        })
        
        console.log(`Found ${schemas.length} schemas.\n`)
        if (schemas.length > 0) {
          schemas.map(schema => {
            console.log(info(`  ${schema}`))
          })
          console.log(' ')
        }
        
      })
      return
    }

    // @TODO Refactor to reduce duplication
    await structuredDataTest(url, options)
    .then(response => {
      console.log('Tests complete.\n')

      if (response.passed.length > 0) {
        console.log(success('Tests passed:\n'))
        response.passed.forEach(testPassed => {
          console.log(
            success(`  ${testPassed.schema}:`),
            info(`${testPassed.test}`)
          )
        })
        console.log('')
      }

      if (response.warnings.length > 0) {
        console.log(warn('Warnings:\n'))
        response.warnings.forEach(warning => {
          console.log(
            warn(`  ${warning.schema}:`),
            info(`${warning.test} not found.`.replace(/""/g, '\''))
          )
        })
        console.log('')
      }

      console.log('Summary:\n')
      console.log('  Passed…   ',response.passed.length)
      console.log('  Failed…   ',response.failed.length)
      console.log('  Warnings… ',response.warnings.length)
      console.log('')
      console.log(success(`*** All tests passed with ${response.warnings.length} warnings. ***`));
      //console.log(response)
    })
    .catch(err => {
      if (err.type === 'VALIDATION_FAILED') {
        console.log('Tests complete.\n')

        if (err.passed.length > 0) {
          console.log(success('Tests passed:\n'))
          err.passed.forEach(testPassed => {
            console.log(
              success(`  ${testPassed.schema}:`),
              info(`${testPassed.test}`)
            )
          })
          console.log('')
        }

        if (err.failed.length > 0) {
          console.log(error('Test failed:\n'))
          err.failed.forEach(failure => {
            console.log(
              error(`  ${failure.schema}:`),
              info(`${failure.test}`.replace(/"/g, ''))
            )
          })
          console.log('')
        }

        if (err.warnings.length > 0) {
          console.log(warn('Warnings:\n'))
          err.warnings.forEach(warning => {
            console.log(
              warn(`  ${warning.schema}:`),
              info(`${warning.test} not found.`.replace(/""/g, '\''))
            )
          })
          console.log('')
        }

        console.log('Summary:\n')
        console.log('  Passed…  ',err.passed.length)
        console.log('  Failed…  ',err.failed.length)
        console.log('  Warning… ',err.warnings.length)
        console.log('')
        console.log(error(`*** Failed on ${err.failed.length} of ${err.passed.length + err.failed.length} tests. ***`));
      } else {
        // Handle other errors (e.g. fetching URL)
        console.log(err)
      }
    })

    return

  // } else if (yargs.argv.config && yargs.argv.config !== true) {
  //   console.log("CONFIG TEST")
  //   return
  } else if ((yargs.argv.presets && yargs.argv.presets === true) || (yargs.argv.p && yargs.argv.p === true)) {
    console.log('The following presets are supported:\n')
    Object.keys(presets).map(preset => {      
      console.log(
        chalk.white(`  ${preset}`),
        chalk.grey(`- ${presets[preset].description}`)
      )
    })
    console.log('')
    return
  }

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
  .option('p', {
    alias: 'presets',
    description: 'Test a URL for specific markup from a list of presets'
  })
  .implies('--url', '--presets')
  .help('h')
  .alias('h', 'help')
  .version(Package.version)
  .alias('v', 'version')
  .showHelpOnFail(true)
  .demandOption('--url or --config')
  .hide('--url or --config')
  //.example(chalk.cyan(`$0 --config path/to/config.js`), chalk.grey('Load URL(s) and tests from a configuration file'))
  .example(chalk.cyan(`$0 --url "https://example.com/article"`), chalk.grey('Inspect a URL'))
  .example(chalk.cyan(`$0 --url <url> --presets "Article,Twitter,Facebook"`), chalk.grey('Test a URL for Article schema and social metatags'))
  .example(chalk.cyan(`$0 --presets`), chalk.grey('List supported presets'))
  .wrap(120)
  .argv
})()