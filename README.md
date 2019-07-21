# Structured Data Testing Tool

A library and command line tool to help inspect and test for Structured Data.

* Checks for Schema.org markup in HTML with microdata, JSONLD and RDFA.
* Checks `<meta>` tags for specific tags and values.
* Comes with build-in presets, which you can copy and extend.

This tool uses [web-auto-extractor](https://www.npmjs.com/package/web-auto-extractor) and [jmespath](https://www.npmjs.com/package/jmespath).

## Install

    npm i structured-data-testing-tool -g

## Features

* You can pass in any URL or a file to test.
* Any schemas found that are supported will be automatically tested.
* You can optionally pass in specific presets to look for.
* Presets can also test for non-schema markup (e.g. Twitter, Facebook, App Store tags).

## Usage

### Command Line Interface

_Note: The API supports additional options not currently exposed in the CLI tool._

```
Usage: sdtt --url <url> [--presets <presets>]

Options:
  -u, --url      Inspect a URL
  -f, --file     Inspect a file
  -p, --presets  Test a URL for specific markup from a list of presets
  -h, --help     Show help
  -v, --version  Show version number

Examples:
  sdtt --url "https://example.com/article"               Inspect a URL
  sdtt --url <url> --presets "Article,Twitter,Facebook"  Test a URL for Article schema and social metatags
  sdtt --presets                                         List supported presets
```

The following presets are currently supported:

```
NAME                      DESCRIPTION                                            
Article                   An article, such as a news article or piece of         
                          investigative report. Newspapers and magazines have    
                          articles of many different types and this is intended  
                          to cover them all.                                     
NewsArticle               A NewsArticle is an article whose content reports news,
                          or provides background context and supporting materials
                          for understanding the news.                            
AnalysisNewsArticle       An AnalysisNewsArticle is a NewsArticle that, while    
                          based on factual reporting, incorporates the expertise 
                          of the author/producer, offering interpretations and   
                          conclusions.                                           
AskPublicNewsArticle      A NewsArticle expressing an open call by a             
                          NewsMediaOrganization asking the public for input,     
                          insights, clarifications, anecdotes, documentation,    
                          etc., on an issue, for reporting purposes.             
BackgroundNewsArticle     A NewsArticle providing historical context, definition 
                          and detail on a specific topic (aka "explainer" or     
                          "backgrounder").                                       
OpinionNewsArticle        An OpinionNewsArticle is a NewsArticle that primarily  
                          expresses opinions rather than journalistic reporting  
                          of news and events.                                    
ReportageNewsArticle      The ReportageNewsArticle type is a subtype of          
                          NewsArticle representing news articles which are the   
                          result of journalistic news reporting conventions.     
ReviewNewsArticle         A NewsArticle and CriticReview providing a professional
                          critic's assessment of a service, product, performance,
                          or artistic or literary work.                          
SocialMediaPosting        SocialMediaPosting schema data                         
DiscussionForumPosting    DiscussionForumPosting schema data                     
BlogPosting               BlogPosting schema data                                
LiveBlogPosting           LiveBlogPosting schema data                            
ClaimReview               A fact-checking review of claims made (or reported) in 
                          some creative work (referenced via itemReviewed).      
Twitter                   Suggested meta tags for Twitter                        
Facebook                  Suggested meta tags for Facebook   
```

Inspect a URL to see what markup is found:

    sdtt --url <url>

Inspect a file to see what markup is found:

    sdtt --file <path to file>

Test a URL contains specific markup:

    sdtt --url <url> --presets "Article,Twitter,Facebook"

#### Example output from CLI

```
$ sdtt -u https://www.bbc.co.uk/news/world-us-canada-49060410
Tests

  ReportageNewsArticle Passed 14 of 14 (100%)
    ✓  ReportageNewsArticle
    ✓  ReportageNewsArticle[*]."@type"
    ✓  ReportageNewsArticle[*].url
    ✓  ReportageNewsArticle[*].mainEntityOfPage
    ✓  ReportageNewsArticle[*].datePublished
    ✓  ReportageNewsArticle[*].dateModified
    ✓  ReportageNewsArticle[*].author
    ✓  ReportageNewsArticle[*].author.name
    ✓  ReportageNewsArticle[*].image
    ✓  ReportageNewsArticle[*].headline
    ✓  ReportageNewsArticle[*].publisher
    ✓  ReportageNewsArticle[*].publisher."@type"
    ✓  ReportageNewsArticle[*].publisher.name
    ✓  ReportageNewsArticle[*].publisher.logo

Statistics

  Number of Metatags: 38
  Schemas in JSON-LD: 1
     Schemas in HTML: 0
      Schema in RDFa: 0
       Schemas found: ReportageNewsArticle
     Test suites run: ReportageNewsArticle
     Total tests run: 14

Results

    Passed: 14 (100%)
  Warnings: 0 (0%)
    Failed: 0 (0%)

  ✓ 14 tests passed.
```

### API

#### How to test a URL

You can integrate Structured Data Testing Tool with a CD/CI pipeline by using the API.

```javascript
const { structuredDataTest } = require('structured-data-testing-tool')
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
  // If any test fails, the promise is rejected
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
…
```

### How to define your own tests

The built-in presets only cover some use cases and are only able to check if values are defined (not what they contain).

With the API you can use [JMESPath query syntax](http://jmespath.org) to define your own tests to check for additional properties and specific values. You can mix and match your own test with the built-in presets, or define your own presets.

```javascript
const url = 'https://www.bbc.co.uk/news/world-us-canada-49060410'

const options = {
  tests: [
    { test: 'NewsArticle', expect: true, type: 'jsonld' }, // Check 'NewsArticle' schema exists in JSON-LD
    { test: 'NewsArticle[*].url', expect: url }, // Expect specific value for 'url' property, fail if value doesn't match
    { test: 'NewsArticle[*].mainEntityOfPage', expect: url, warning: true }, // Warn but don't fail if test doesn't pass
    { test: '"twitter:domain"' expect: 'www.bbc.co.uk', type: 'metatag' } // Test for twitter meta tag with specific value
  ]
}

structuredDataTest(url, options)
…
```

### How to define your own presets

A preset is a collection of tests.

There are built-in presets you can use, you can also easily define your own presets.

When creating a preset, it is recommended you specify a `schema` value for tests that matches the schema of the schema being tested and to only test one schema per preset. However this is not enforced, if you want you can use any value for the schema property and test as many different schemas in a preset as you like.

```javascript
const url = 'https://www.bbc.co.uk/news/world-us-canada-49060410'

const CustomPreset = {
  tests: [
    { test: 'NewsArticle', expect: true, type: 'jsonld', schema: 'CustomPreset' },
    { test: '"twitter:domain"' expect: 'www.bbc.co.uk', type: 'metatag', schema: 'CustomPreset' }
  ]
}

const options = {
  presets: [ CustomPreset ]
}

structuredDataTest(url, options)
…
```

### Test options

#### Option: Test

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

Tips:

* Use double quotes to escape special characters in property names.
* You can `console.log()` the `stucturedData` property of the response object from `structuredDataTest()` to see what sort of meta tags and structured data was found to help with writing your own tests.

#### Option: Type

You can specify a `type` to indicate if markup should be in `jsonld`, `rdfa` or `microdata` (HTML) format.

You can also specify a value of `metatag` to check `<meta>` tags.

If you do not specify a type for a test, a default type of `any` will be assumed and all types will be checked.

#### Option: Expect

You can specify a value for `expect` that is either `true`, `false` or a string.

A value of `true` is a boolean that indicates the property must exist, but does not check value.

A value of `false` is a boolean that indicates the value must not exist.

Any other value is treated as a string that indicates the value should match the string found.

_NB: Future releases may support passing a function to `expect`._

#### Option: Warning

When `warning` is set to `true`, if the test does not pass it will only result in a warning.

The default is `false`, meaning if the test fails it will be counted as a failure.

#### Option: Schema

You can pass a `schema` value to group related tests together.

The value passed to `schema` not have to match an actual schema name, but that is recommended.

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
  
  structuredDataTest(html)
  .then(response => {
    console.log("All tests passed.")
  })
  .catch(err => {
    console.log("Some tests failed.")
  })
})();
```
