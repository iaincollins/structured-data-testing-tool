// Test dectection of different types of input
const fs = require('fs')
const fetch = require('node-fetch')

const {
  structuredDataTest,
  structuredDataTestUrl,
  structuredDataTestHtml
} = require('../index')
const presets = require('../presets')

const testHTML = '__tests__/fixtures/example.html'
const html = fs.readFileSync(testHTML)
const testJSON = fs.readFileSync('__tests__/fixtures/example.json')

describe('Input type detection', () => {
  beforeAll(async () => {
    // Mock fetch request
    fetch.resetMocks()
    fetch.mockResponse(html);
  })

  afterAll(() => {
    fetch.resetMocks()
  })

  test('should auto-detect when input is a buffer', async () => {
    const result = await new Promise((resolve) => {
      fs.readFile(testHTML, async (err, buffer) => {
        return resolve(await structuredDataTest(buffer, { presets: [ presets.Google ]}))
      })
    })
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })

  test('should auto-detect when input is a readable stream', async () => {
    const buffer = fs.createReadStream(testHTML)
    const result = await structuredDataTest(buffer, { presets: [ presets.Google ]})
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })

  test('should auto-detect when input is JSON string', async () => {
    const result = await structuredDataTest(testJSON)
    expect(result.passed.length).toEqual(1)
    expect(result.optional.length).toEqual(19)
    expect(result.failed.length).toEqual(0)
  })

  test('should auto-detect when input is an HTTP URL', async () => {
    const result = await structuredDataTest('http://example.com', { presets: [ presets.Google ]})
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })

  test('should auto-detect when input is an HTTPS URL', async () => {
    const result = await structuredDataTest('https://example.com', { presets: [ presets.Google ]})
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })  

  test('should work when explicitly invoked with HTML', async () => {
    const result = await structuredDataTestHtml(html, { presets: [ presets.Google ]})
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })

  test('should work when explicitly invoked with a URL', async () => {
    const result = await structuredDataTestUrl('https://example.com', { presets: [ presets.Google ]})
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })

  test('should support http://localhost URLs', async () => {
    // Tests fix for bug where http://localhost URLs did not always work
    // https://github.com/glitchdigital/structured-data-testing-tool/issues/13
    const result = await structuredDataTest('http://localhost', { presets: [ presets.Google ] })
    expect(result.passed.length).toBeGreaterThan(1)
    expect(result.failed.length).toEqual(0)
  })
})
