# Structured Data Testing Tool

A library and command line tool to help test for Structured Data.

* Checks for Schema.org markup in HTML with microdata, JSONLD and RDFA.
* Checks `<meta>` tags for specific tags and values.
* Comes with build-in presets, which you can copy and extend.

This is a new project at the proof of concept stage.

## Install

    npm i structured-data-testing-tool -g

## Usage

### CLI

* `sdtt --url <url>` - Inspect a URL to see what markup is present
* `sdtt --url <url> --presets "Article,Twitter,Facebook"` - Test a URL contains specific markup

### API

#### How to test a URL

You can pass in a URL to test.

```javascript
const { sdtt } = require('structured-data-testing-tool')
const { NewsArticle, Twitter, Facebook } = require('./presets')

const url = 'https://www.cnet.com/news/absolute-best-prime-day-2019-best-tech-deals-instant-pot-airpods-sonos-echo-show-5-ninja-foodi-nespresso/'

structuredDataTest(url, { presets: [ NewsArticle, Twitter, Facebook ] })
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

You can also test HTML in a file by passing it as a string (or a readable buffer).

```javascript
const { sdtt } = require('structured-data-testing-tool')
const fs = require('fs')
const { NewsArticle, Twitter, Facebook } = require('./presets')

const html = fs.readFileSync('./example.html')

structuredDataTest(html, { presets: [ NewsArticle, Twitter, Facebook ] })
.then(response => {
  console.log("All tests passed.")
})
.catch(err => {
  if (err.type === 'VALIDATION_FAILED') {
    console.log("Some tests failed.")
  } else {
    console.log(err)
  }
})
```

### How to define your own tests

The built-in presets are limited in usefulness as they only cover some use cases and are only able to check values are defined.

You can use `jmespath` syntax to define your own tests to check for additional values and specific responses.

You can mix and match them with thee built-in presets, or define your own presets.

```javascript
const { sdtt } = require('structured-data-testing-tool')

const url = 'https://www.cnet.com/news/absolute-best-prime-day-2019-best-tech-deals-instant-pot-airpods-sonos-echo-show-5-ninja-foodi-nespresso/'

const options = {
  tests: [
    { test: 'NewsArticle', expect: true },
    { test: 'NewsArticle[*]."@type"', expect: 'NewsArticle' },
    { test: 'NewsArticle[*]."@context"', expect: 'http://schema.org' },
    { test: 'NewsArticle[*].url', expect: url },
    { test: 'NewsArticle[*].mainEntityOfPage', expect: url }
  ]
}

structuredDataTest(url, options)
.then(response => {
  console.log("All tests passed.")
})
.catch(err => {
  if (err.type === 'VALIDATION_FAILED') {
    console.log("Some tests failed.")
    err.failed.forEach(test => {
      console.error(test)
    })
  } else {
    console.log(err)
  }
})
```
