
const fs = require('fs')
const {
  _structuredDataTest,
  structuredDataTest,
  structuredDataTestUrl,
  structuredDataTestHtml
} = require('../index')
const { Article, Twitter } = require('../presets')

const html = fs.readFileSync('__tests__/fixtures/example.html')

test('should auto-detect when content is HTML', async () => {
  await structuredDataTest(html, { presets: [ Article, Twitter ] })
  .then(response => {
    expect(response.passed.length).toBeGreaterThan(10)
    expect(response.failed.length).toEqual(0)
  })
  .catch(err => {
    // Fail test if we end up here
    console.log(err.structuredData.microdata)
    err.failed.map(test => {
      console.error("Test failed", test.test)
    })
    expect(false).toBeTruthy()
  })
})

test.skip('should auto-detect when content is a URL', async () => {

})

test.skip('should work when explicitly passed HTML', async () => {
  
})

test.skip('should work when explicitly passed a URL', async () => {
  
})

test.skip('should detect and return structured data schemas found', async () => {
  
})

test.skip('should validate all structured data schemas found', async () => {
  
})

test.skip('should validate all structured data schemas found as well as any presets specified', async () => {

})

test.skip('should run all tests passed as options', async () => {
  
})

test.skip('should run all tests passed as options as well as any presets specified', async () => {
  
})

test.skip('should run all tests passed as options as well as any presets specified and any schemas found', async () => {
  
})
