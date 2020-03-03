# Structured Data Testing Tool

Inspect and test web pages for Structured Data.

Includes both a Command Line Interface for easy ad-hoc testing of URLs and library with extendable API for use when writing tests or building other tools.

## Install

To install the command line tool (`sdtt`), include the `-g` (global) flag when installing:

    npm i structured-data-testing-tool -g

## Features

* Command Line Interface (`sdtt`) and API that can be used with any test framework.
* Input can be URL, load markup from a file or be passed HTML via a string, buffer or stream.
* Automatically detects all Schema.org schemas, in HTML (`microdata`), `JSON-LD` and `RDFa`.
* Can test `<meta>` tags (and custom schemas) for specific tags / fields / values.
* Built-in presets for testing for Twitter, Facebook and Google structured data.
* Create your own re-useable, custom presets to test custom schemas or write tests specific to your site.
* Use with a headless browser to test Structured Data injected by client side JavaScript (e.g. Google Tag Manager).

## Usage

### Command Line Interface

```
Usage: sdtt --url <url> [--presets <presets>] [--schemas <schemas]

Options:
  -u, --url      Inspect a URL
  -f, --file     Inspect a file
  -p, --presets  Test for specific markup from a list of presets
  -s, --schemas  Test for a specific schema from a list of schemas
  -i, --info     Show more detailed information about structured data found
  -o, --output   Output test results to a file
  -h, --help     Show help
  -v, --version  Show version number

Usage: sdtt --url <url> [--presets <presets>] [--schemas <schemas]

Examples:
  sdtt --url "https://example.com/article"                Inspect a URL
  sdtt --url <url> --presets SocialMedia                  Test a URL for social media metatags
  sdtt --url <url> --presets Google                       Test a URL for markup inspected by Google
  sdtt --url <url> --presets "Twitter,Facebook"           Test a URL with multiple presets
  sdtt --url <url> -p Twitter -p Facebook                 Test a URL with multiple presets (alternative)
  sdtt --url <url> --schemas Article                      Test a URL for the Article schema
  sdtt --url <url> --schemas "jsonld:Article"             Test a URL for the Article schema in JSON-LD
  sdtt --url <url> --schemas "microdata:Article"          Test a URL for the Article schema in microdata/HTML
  sdtt --url <url> --schemas "rdfa:Article"               Test a URL for the Article schema in RDFa
  sdtt --url <url> --schemas "Article,WPHeader,WPFooter"  Test a URL for multiple schemas
  sdtt --url <url> -s Article -s WPHeader -s WPFooter     Test a URL for multiple schemas (alternative)
  sdtt --url <url> --output results.json                  Output test results to a JSON file
  sdtt --presets                                          List all built-in presets
  sdtt --schemas                                          List all supported schemas
```

Inspect a URL to see what markup is found:

    sdtt --url <url>

Inspect a file to see what markup is found:

    sdtt --file <path to file>

Test a URL contains specific markup:

    sdtt --url <url> --presets "Twitter,Facebook"

Test a URL contains specific schema:

    sdtt --url <url> --schemas "Article"

Test a URL contains specific schema in both JSON-LD and in microdata/HTML:

    sdtt --url <url> --schemas "jsonld:Article,microdata:Article"

Run `sdtt --presets` to list the built-in-presets:

```
NAME                      DESCRIPTION
Google                    Check for common markup used by Google
Twitter                   Suggested metatags for Twitter
Facebook                  Suggested metatags for Facebook
SocialMedia               Suggested markup for integration with social media sites
```

#### Example output from CLI

```
$ sdtt --url https://www.bbc.co.uk/news/world-us-canada-49060410 --presets Google,SocialMedia
Tests

  Schema.org > ReportageNewsArticle - 100% (1 passed, 1 total)
    ✓  schema in jsonld

  Google > ReportageNewsArticle - 100% (12 passed, 12 total)
    ✓  ReportageNewsArticle
    ✓  ReportageNewsArticle[*]."@type"
    ✓  ReportageNewsArticle[*].author
    ✓  ReportageNewsArticle[*].datePublished
    ✓  ReportageNewsArticle[*].headline
    ✓  ReportageNewsArticle[*].image
    ✓  ReportageNewsArticle[*].publisher."@type"
    ✓  ReportageNewsArticle[*].publisher.name
    ✓  ReportageNewsArticle[*].publisher.logo
    ✓  ReportageNewsArticle[*].publisher.logo.url
    ✓  ReportageNewsArticle[*].dateModified
    ✓  ReportageNewsArticle[*].mainEntityOfPage

  SocialMedia > Facebook - 100% (8 passed, 8 total)
    ✓  must have page title
    ✓  must have page type
    ✓  must have url
    ✓  must have image url
    ✓  must have image alt text
    ✓  should have page description
    ✓  should have account username
    ✓  should have locale

  SocialMedia > Twitter - 100% (7 passed, 7 total)
    ✓  must have card type
    ✓  must have title
    ✓  must have description
    ✓  must have image url
    ✓  must have image alt text
    ✓  should have account username
    ✓  should have username of content creator

Statistics

  Number of Metatags: 38
  Schemas in JSON-LD: 1
     Schemas in HTML: 0
      Schema in RDFa: 0
  Schema.org schemas: ReportageNewsArticle
       Other schemas: 0
    Test groups run : 4
     Total tests run: 28

Results

    Passed: 28 (100%)
  Warnings: 0 (0%)
    Failed: 0 (0%)

  ✓ 28 tests passed with 0 warnings.
```

### API

#### How to test a URL

You can integrate Structured Data Testing Tool with a CD/CI pipeline by using the API.

```javascript
const { structuredDataTest } = require('structured-data-testing-tool')
const { ReportageNewsArticle, Twitter, Facebook } = require('./presets')

const url = 'https://www.bbc.co.uk/news/world-us-canada-49060410'

structuredDataTest(url, { presets: [ ReportageNewsArticle, Twitter, Facebook ] })
.then(res => {
  // If you end up here, then there were no errors
  console.log("All tests passed.")
  console.log('Passed:',res.passed.length)
  console.log('Failed:',res.failed.length)
  console.log('Warnings:',res.warnings.length)
})
.catch(err => {
  // If any test fails, the promise is rejected
  if (err.type === 'VALIDATION_FAILED') {
    console.log("Some tests failed.")
    console.log('Passed:',err.res.passed.length)
    console.log('Failed:',err.res.failed.length)
    console.log('Warnings:',err.res.warnings.length)  
    // Loop over validation errors
    err.res.failed.forEach(test => {
      console.error(test)
    })
  } else {
    // Handle other errors here (e.g. an error fetching a URL)
    console.log(err)
  }
})
```

#### How to test a local HTML file

You can also test HTML in a file by passing it as a string, a stream or a readable buffer.

```javascript
const html = fs.readFileSync('./example.html')
structuredDataTest(html)
.then(response => { /* … */ })
.catch(err => { /* … */ })
```

### How to define your own tests

The built-in presets only cover some use cases and are only able to check if values are defined (not what they contain).

With the API you can use [JMESPath query syntax](http://jmespath.org) to define your own tests to check for additional properties and specific values. You can mix and match tests with presets.

```javascript
const url = 'https://www.bbc.co.uk/news/world-us-canada-49060410'

const options = {
  tests: [
    // Check 'NewsArticle' schema exists in JSON-LD
    { test: 'NewsArticle', expect: true, type: 'jsonld' },
     // Expect specific value for 'url' property, fail if value doesn't 
    { test: 'NewsArticle[*].url', expect: url },match
    // Warn but don't fail if test doesn't pass
    { test: 'NewsArticle[*].mainEntityOfPage', expect: url, warning: true },
    // Test for twitter meta tag with specific value
    { test: '"twitter:domain"' expect: 'www.bbc.co.uk', type: 'metatag' }
  ]
}

structuredDataTest(url, options)
.then(response => { /* … */ })
.catch(err => { /* … */ })
```

### How to define your own presets

A preset is a collection of tests.

There are built-in presets you can use, you can list them with `--presets` option using the CLI. You can also easily define your own custom presets.

Presets must have a `name` (which should ideally be unique, but does not have to be) and `description` and an array of `test` objects in `tests`. Both `name` and `description` be arbitrary strings, `tests` should be an array of valid `test` objects.

You can optionally group tests by specifying a value for `group` and set a default schema to use for all tests in `schema`. These can be arbitrary strings, though it's recommended schemas reflect Schema.org schema names.

If a test explicitly defines it's own `group` or `schema`, that will override the default value for the preset for that specific test (which may impact how results are grouped).

Presets can contain other presets using the `presets` property (an array).

Presets can have `conditional` property, which contains a `test` object, in which case the tests in the preset will only only be run if the conditional test passes.

#### Preset Example 1

```javascript
const url = 'https://www.bbc.co.uk/news/world-us-canada-49060410'

// This test shows how you can use different types of tests in one preset.
const MyCustomPreset = {
  name: 'My Custom Preset', // Required
  description: 'Test NewsArticle JSON-LD data is defined and twitter metadata was found', // Required
  tests: [ // Required (unless 'presets' is specified)
    { test: 'NewsArticle', type: 'jsonld', schema: 'NewsArticle' },
    { test: '"twitter:card"', type: 'metatag' },
    { test: '"twitter:domain"', expect: 'www.bbc.co.uk', type: 'metatag', }
  ],
  // Other preset options:
  // group: 'My Group Name', // A group name can be used to group tests in a preset (defaults to preset name)
  // schema: 'NewsArticle', // Specify a schema if all the tests in the preset apply to a specific schema
  // presets: [] // Any preset can also contain other presets
  // conditional: {} // Define a conditional `test`, which is evaluated to determine if the preset should run
}

const options = {
  presets: [ MyCustomPreset ]
}

structuredDataTest(url, options)
.then(response => { /* … */ })
.catch(err => { /* … */ })
```

#### Preset Example 2

This is the code for one of the built-in presets, it tests for the **ClaimReview** schema.

It shows how to write a preset that will automatically run against all instances of a given schema found.

This is useful to be able to do when you have multiple instances of the same schema on page.

NB: This example is quite simple and doesn't try and validate the contents of the properties in the schema or check for invalid properties on the schema.

```javascript
const ClaimReview = {
  name: 'ClaimReview',
  description: 'A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).',
  // If you add 'schema' property to a preset **and** write tests that start with a selector like `ClaimReview[*]`
  // (i.e. with the schema name followed by an asterisk in the selector) then those tests will automatically
  // be run against every instance of that schema found, so you can easily find where an error is if there are
  // multiple instances of the same schema on a page.
  schema: 'ClaimReview',
  // A 'conditional' on a preset or test is just a normal test object. If it fails to pass, the tests in the
  // preset (or the individual test, if it is used on a test) will not be run.
  conditional: {
    test: 'ClaimReview'
  },
  tests: [
    // Expected by Google
    { test: `ClaimReview` },
    { test: `ClaimReview[*]."@type"`, expect: 'ClaimReview' },
    { test: `ClaimReview[*].url` },
    { test: `ClaimReview[*].reviewRating` },
    { test: `ClaimReview[*].claimReviewed` },
    // Warnings
    { test: `ClaimReview[*].author`, warning: true },
    { test: `ClaimReview[*].datePublished`, warning: true },
    { test: `ClaimReview[*].itemReviewed`, warning: true },
  ],
}

module.exports = {
  ClaimReview
}
```

### Test options

#### test
```
Type: string
Required: true
```

The value for `test` should be a valid [JMESPath query](http://jmespath.org).

Examples of JMESPath queries:

`Article`  
Test `Article` schema found.

`Article[*].url`  
Test `url` property of any `Article` schema found.

`Article[0].headline`  
Test `headline` property of first `Article` schema found.

`Article[1].headline`  
Test `headline` property of second `Article` schema found.

`Article[*].publisher.name`  
Test `name` value of `publisher` on any `Article` schema found.

`Article[*].publisher."@type"`  
Test `@type` value of `publisher` on any `Article` schema found.

`"twitter:image" || "twitter:image:src"`  
Check for a metatag named either `twitter:image` -or- `twitter:image:src`

Tips:

* Use double quotes to escape special characters in property names.
* You can `console.log()` the `structuredData` property of the response object from `structuredDataTest()` to see what sort of meta tags and structured data was found to help with writing your own tests.

#### type
```
Type: string ('json'|'rdfa'|'microdata'|'any')
Required: false
Default: 'any'
```

You can specify a `type` to indicate if markup should be in `jsonld`, `rdfa` or `microdata` (HTML) format.

You can also specify a value of `metatag` to check `<meta>` tags.

If you do not specify a type for a test, a default of `any` will be assumed and all types will be checked (and if any source matches, the test will pass).

If you specifically want to test for a value and you know if it is JSON-LD, RDFa or microdata you should specify the explicit type for the test to check.

#### expect
```
Type: boolean|string|RexExp
Required: false
Default: true
```

You can specify a value for `expect` that is either a boolean, a string or a Regular Expression object (defaults to `true`).

* A value of `true` indicates the property must exist (but does not check it's value).
* A value of `false` that indicates the value must not exist.
* A Regular Expression is evaluated against the test query (the test passes if a test for expression passes).
* Any other value is treated as a string and the value of the property should exactly match it.

When using a Regular Expression if the query points to an array then the test will pass if any item in the array matches the Regular Expression.

Examples of how to use [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) with the `expect` option:

* `expect: /^[0-9]+$/g` // Value being tested should only contain numbers
* `expect: /^[A-z]+$/g` // Value being tested should only contain letters
* `expect: /^[A-z0-9 ]+$/g` //  Value should only contain letters, numbers and spaces

You can use regular expressions to validate dates, specific values, URLs, etc.

#### warning
```
Type: boolean
Required: false
Default: false
```

When `warning` is set to `true`, if the test does not pass it will only result in a warning.

The default is `false`, meaning if the test fails it will be counted as a failure.

#### info
```
Type: boolean
Required: false
Default: false
```

When `info` is set to `true`, if the test passes it will not register as pass, but you can use `--info/-i` on the CLI or inspect the `info` property on the response from the API to see it.

The default is `false`. This option can be used in conjunction with `warning` if it should not be counted as a failed test if it does not pass.

#### conditional
```
Type: object
Required: false
Default: undefined
```

A `conditional` object can contain a conditional test to be run, to determine if the test itself should be run.

If the conditional test fails, the test will not be run (and it will not be included in the test results). If the conditional test passes, the test will be run and the pass / fail / info / warning included in the results.

This is considered advanced usage, to help avoid having to write overly complex test statements. Conditional test objects use the same syntax as regular test objects, but conditional tests are not included in the results.

#### group
```
Type: string
Required: false
Default: undefined
```

You can pass a string for `group` value to indicate how tests should be grouped when displaying results. You do not need to specify a group if tests an in a preset, by default the preset name will be used.

#### groups
```
Type: array of strings
Required: false
Default: undefined
```

You can pass an array of strings to be used to group tests. This used internally to group tests by the structured data testing tool and is considered advanced usage for edge case situations like creating tests dynamically.

#### schema
```
Type: string
Required: false
Default: undefined
```

You can pass a `schema` value that indicates what schema a test is for. Tests in different presets can test the same schema, tests in the same preset can also test multiple schemas.

This is intended as an option to control how tests are grouped when displaying results, the value is not checked for validity and is considered advanced usage for edge case situations.

### Testing with client side rendering

If a page uses JavaScript with client side rendering to generate Structured Data, you can use a tool like [Puppeteer](https://github.com/GoogleChrome/puppeteer) (a headless Chrome API) to fetch the HTML and allow any client side JavaScript to run and then test the rendered page with the Structured Data Testing Tool.

Note:

* Puppeteer is a large package (~272 MB) and must be installed separately.
* You can only use Puppeteer with the API, not the Command Line Interface.

Example of how to use `puppeteer` with `structured-data-testing-tool` :

```javascript
const { structuredDataTest } = require('structured-data-testing-tool')
const puppeteer = require('puppeteer');

(async () => {
  const url = 'https://www.bbc.co.uk/news/world-us-canada-49060410'
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  const html = await page.evaluate(() => document.body.innerHTML);
  await browser.close();
  
  await structuredDataTest(html)
  .then(response => { console.log("All tests passed.") })
  .catch(err => { console.log("Some tests failed.") })
})();
```

### Contributing

Contributions are welcome - especially additions and improvements to the built-in presets.

This can include bug reports, feature requests, ideas, pull requests, examples of how you have used this tool (etc).

Please see the [Code of Conduct](https://github.com/glitchdigital/structured-data-testing-tool/blob/master/CODE_OF_CONDUCT.md) and complete the issue and/or Pull Request templates when reporting bugs, requesting enhancements or contributing code.

Feedback and insight on how you use Structured Data Testing Tool is also very helpful.
