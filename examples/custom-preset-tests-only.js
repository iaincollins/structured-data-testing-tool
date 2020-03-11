// Example of how to run tests for a custom preset only with the API
// (with auto-detection of tests disabled, and no presets specified)
const { structuredDataTest } = require('structured-data-testing-tool')

const url = 'https://www.bbc.co.uk/news/world-us-canada-49060410'
 
const MyCustomPreset = {
  name: 'My Custom Preset',
  description: 'Test NewsArticle JSON-LD data is defined and twitter metadata was found',
  tests: [
    { test: 'ReportageNewsArticle', type: 'jsonld'},
    { test: 'ReportageNewsArticle[*].mainEntityOfPage', type: 'jsonld', expect: url },
  ],
}

let result

structuredDataTest(url, { 
  presets: [ MyCustomPreset ],
  auto: false
})
.then(res => {
  console.log('✅ All tests passed!')
  result = res
})
.catch(err => {
  if (err.type === 'VALIDATION_FAILED') {
    result = err.res
    console.log('❌ Some tests failed.')
    console.log("⚠️  Errors:\n", result.failed.map(test => test))
  } else {
    console.log(err) // Handle other errors here (e.g. an error fetching a URL)
  }
})
.finally(() => {
  if (result) {
    console.log(
      `Passed: ${result.passed.length},`,
      `Failed: ${result.failed.length},`,
      `Warnings: ${result.warnings.length}`,
    )
    console.log(`Schemas found: ${result.schemas.join(',')}`)
  }
})