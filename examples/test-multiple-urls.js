// Example of how to test multiple URLs with the API
const { structuredDataTest } = require('structured-data-testing-tool')
const { Google, Twitter, Facebook } = require('structured-data-testing-tool/presets')

const urls = [
  'https://www.bbc.co.uk/news/world-us-canada-49060410',
  'https://www.nytimes.com/2020/03/08/world/coronavirus-news.html',
  'https://www.ft.com/content/75583754-5fab-11ea-b0ab-339c2307bcd4',
  'https://news.sky.com/story/coronavirus-italy-sees-largest-daily-rise-in-deaths-and-confirmed-cases-11953192'
]
 
urls.forEach(url => {
  let result
  structuredDataTest(url, {
    presets: [ Google, Twitter, Facebook ],
  })
  .then(res => {
    result = res
    console.log(`✅ ${url}`)
  })
  .catch(err => {
    if (err.type === 'VALIDATION_FAILED') {
      result = err.res
      console.log(`❌ ${url}`)
    } else {
      console.error(err) // Handle other errors here (e.g. an error fetching a URL)
    }
  })
  .finally(() => {
    if (result) {
      console.log(
        `   Passed: ${result.passed.length},`,
        `   Failed: ${result.failed.length},`,
        `   Warnings: ${result.warnings.length}`,
      )
      console.log(`   Schemas found: ${result.schemas.join(',')}`)
    }
  })
})