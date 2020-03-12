const fs = require('fs')
const fetch = require('node-fetch')

const {
  structuredDataTest,
  structuredDataTestUrl
} = require('../index')
const presets = require('../presets')

const testFile = '__tests__/fixtures/invalid-properties.html'
const html = fs.readFileSync(testFile)

let structuredDataTestResult = null

describe('Should flag invalid properties', () => {
  beforeAll(async () => {
    fetch.resetMocks()
    fetch.mockResponse(html)

    await structuredDataTest(html, { presets: [ presets.Google, presets.Twitter ]})
    .then(response => { structuredDataTestResult = response })
    .catch(err => { structuredDataTestResult = err.res })
  })

  afterAll(() => {
    fetch.resetMocks()
  })

  test('should warn when invalid properties are found', async () => {
    const result = await structuredDataTest(html)
    .then(response => response)
    .catch(err => err.res)
    
    expect(result.schemas.length).toEqual(1)
    expect(result.passed.length).toEqual(10)
    expect(result.warnings.length).toEqual(0)
    expect(result.failed.length).toEqual(3)
  })

})
