# Structured Data Testing Tool

A library and command line tool to help inspect and test for Structured Data.

* Checks for Schema.org markup in HTML with microdata, JSONLD and RDFA.
* Checks `<meta>` tags for specific tags and values.
* Comes with build-in presets, which you can copy and extend.

_This is a new project and is still at the proof of concept stage._

This tool was made possible thanks to `web-auto-extractor` and `jmespath`.

## Install

    npm i structured-data-testing-tool -g

## Usage

### Command Line Interface

* You can pass in any URL to test.
* Any schemas found will be tested.
* You can optionally pass in specific presets to look for.
* Presets can also test for non-schema markup (such as meta tags).

Presets can be useful to test if required markup for social media, app stores and other sites is present.

_Note: The command line interface is functional but not feature complete._

Inspect a URL to see what markup is found:

    sdtt --url <url>

Inspect a file to see what markup is found:

    sdtt --file <path to file>

Test a URL contains specific markup:

    sdtt --url <url> --presets "Article,Twitter,Facebook"

#### Example output from CLI

<img width="508" alt="Example output 1" src="https://user-images.githubusercontent.com/595695/61585749-5cdef500-ab5b-11e9-8c07-edd82f3652b0.png">

<img width="566" alt="Example output 2" src="https://user-images.githubusercontent.com/595695/61585750-61a3a900-ab5b-11e9-9aec-a80e9b32cc63.png">

### API

#### How to test a URL

You can integrate with `structured-data-testing-tool` with your CD/CI pipeline by using the API.

The API works just like the CLI, except you can more easily manage how you handle the response.

```javascript
const { sdtt } = require('structured-data-testing-tool')
const { ReportageNewsArticle, Twitter, Facebook } = require('./presets')

const url = 'https://www.bbc.co.uk/news/world-us-canada-49060410'

structuredDataTest(url, { presets: [ ReportageNewsArticle, Twitter, Facebook ] })
.then(response => {
  // If you end up here, then there were no errors
  console.log("All tests passed.")
  console.log('Passed:',response.passed.length)
  console.log('Failed:',response.failed.length)
  console.log('Warnings:',response.warnings.length)
})
.catch(err => {
  if (err.type === 'VALIDATION_FAILED') {
    console.log("Some tests failed.")
    console.log('Passed:',err.passed.length)
    console.log('Failed:',err.failed.length)
    console.log('Warnings:',err.warnings.length)  
    // Loop over validation errors
    err.failed.forEach(test => {
      console.error(test)
    })
  } else {
    // Handle other errors (e.g. error fetching URL)
    console.log(err)
  }
})
```

#### How to test a local HTML file

You can also test HTML in a file by passing it as a string, a stream or a readable buffer.

```javascript
const html = fs.readFileSync('./example.html')
structuredDataTest(html)
…
```

### How to define your own tests

The presets are limited as they only cover some use cases and are only able to check if values are defined and not what they contain.

With the API you can use `jmespath` query syntax to define your own tests to check for additional properties and specific values.

You can mix and match your own test with the built-in presets, or define your own presets.

```javascript
const url = 'https://www.bbc.co.uk/news/world-us-canada-49060410'

const options = {
  tests: [
    { test: 'NewsArticle', expect: true }, // Check 'NewsArticle' schema exists
    { test: 'NewsArticle[*].url', expect: url }, // Expect specific value for property, fail if doesn't match
    { test: 'NewsArticle[*].mainEntityOfPage', expect: url, warning: true } // Warn but don't fail if doesn't pass
  ]
}

structuredDataTest(url, options)
…
```
