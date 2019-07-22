
const fs = require('fs')
const fetch = require('node-fetch')
const {
  _structuredDataTest,
  structuredDataTest,
  structuredDataTestUrl,
  structuredDataTestHtml
} = require('../index')
const presets = require('../presets')


// @FIXME Split out this single catch-all example file to test multiple scenarios separately
const testFile = '__tests__/fixtures/example.html'
const html = fs.readFileSync(testFile)

let structuredDataTestResult = null

describe('structured data parsing', () => {
  beforeAll(async () => {
    // Mock fetch request
    fetch.resetMocks()
    fetch.mockResponse(html);

    // Current test uses single example file
    // Ideally there would be multiple different fixtures that more robustly
    // test different scenarios, but this is is a practical approach that
    // improves coverage easily for now with minimal effort
    await structuredDataTest(html)
    .then(response => {
      structuredDataTestResult = response
    })
    .catch(err => {
      structuredDataTestResult = err
    })
  })

  afterAll(() => {
    fetch.resetMocks()
  })

  test('should auto-detect and return structured data schemas found', async () => {
    expect(structuredDataTestResult.schemas.length).toEqual(4)
    expect(structuredDataTestResult.failed.length).toEqual(0)
  })

  test('should auto-detect when input is HTML and validate all schemas found', async () => {
    expect(structuredDataTestResult.passed.length).toBeGreaterThan(10)
    expect(structuredDataTestResult.failed.length).toEqual(0)
  })
  
  test('should auto-detect when input is a string', async () => {
    const result = await structuredDataTest(html.toString())
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })

  test('should auto-detect when input is a buffer', async () => {
    const result = await new Promise((resolve) => {
      fs.readFile(testFile, async (err, buffer) => {
        return resolve(await structuredDataTest(buffer))
      })
    })
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })

  test('should auto-detect when input is a readable stream', async () => {
    const buffer = fs.createReadStream(testFile)
    const result = await structuredDataTest(buffer)
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })

  test('should auto-detect when input is an HTTP URL', async () => {
    const result = await structuredDataTest('http://example.com')
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })

  test('should auto-detect when input is an HTTPS URL', async () => {
    const result = await structuredDataTest('https://example.com')
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })  

  test('should work when explicitly invoked with HTML', async () => {
    const result = await structuredDataTestHtml(html)
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })

  test('should work when explicitly invoked with a URL', async () => {
    const result = await structuredDataTestUrl('https://example.com')
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toEqual(0)
  })

  test('should validate all structured data schemas found as well as any presets specified', async () => {
    // Should validate schemas found, but also find errors as Facebook schema should not
    // be present in the example, but is passed as a preset so the test should fail.
    let result = ''
    await structuredDataTest(html, { presets: [ presets.Facebook ] })
    .then(response => {
      result = response
    })
    .catch(err => {
      result = err
    })
    expect(result.schemas.length).toEqual(4)
    expect(result.schemas.includes('Facebook')).toBeFalsy()
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.failed.length).toBeGreaterThan(0)
  })

  test('should run all tests passed as options and for any schemas found', async () => {
    const options = {
      tests: [
        { test: 'ReportageNewsArticle', expect: true },
        { test: 'ReportageNewsArticle[*]."@type"', expect: 'ReportageNewsArticle' },
        { test: 'ReportageNewsArticle[*]."@context"', expect: 'http://schema.org' },
        { test: 'ReportageNewsArticle[*].url', expect: 'http://example.com/path-to-article', type: 'any' },
        { test: 'ReportageNewsArticle[*].headline', expect: 'Example Headline in JSON-LD', type: 'jsonld' },
        { test: 'Article[*].headline', expect: 'Example Headline in Microdata', type: 'microdata' },
        { test: 'NewsArticle[*].headline', expect: 'Example Headline in RDFa', type: 'rdfa' },
        { test: '"twitter:card"', expect: 'summary_large_image', type: 'metatag' }
      ]
    }
    try {
      const result = await structuredDataTestUrl("https://example.com", options)
      expect(result.passed.length).toBeGreaterThan(8)
      expect(result.failed.length).toEqual(0)
    } catch (e) {
      console.error("Failing tests:", e.failed)
      throw e
    }
  })

  test('should run all tests passed as options and for any schemas found and any presets specified', async () => {
    const options = {
      tests: [
        { test: 'ReportageNewsArticle', expect: true },
        { test: 'ReportageNewsArticle[*]."@type"', expect: 'ReportageNewsArticle' },
        { test: 'ReportageNewsArticle[*]."@context"', expect: 'http://schema.org' },
        { test: 'ReportageNewsArticle[*].url', expect: 'http://example.com/path-to-article', type: 'any' },
        { test: 'ReportageNewsArticle[*].headline', expect: 'Example Headline in JSON-LD', type: 'jsonld' },
        { test: 'Article[*].headline', expect: 'Example Headline in Microdata', type: 'microdata' },
        { test: 'NewsArticle[*].headline', expect: 'Example Headline in RDFa', type: 'rdfa' },
        { test: '"twitter:card"', expect: 'summary_large_image', type: 'metatag' },
        { test: '"should-not-exist"', expect: false, type: 'metatag' }
      ],
      presets: [ presets.Twitter ]
    }
    try {
      const result = await structuredDataTestUrl("https://example.com", options)
      expect(result.passed.length).toBeGreaterThan(10)
      expect(result.failed.length).toEqual(0)
    } catch (e) {
      console.error("Failing tests:", e.failed)
      throw e
    }
  })

  // Test for fix that addresses issue:
  // https://github.com/glitchdigital/structured-data-testing-tool/issues/4
  test('should be able to detect complex structured data', async () => {
    expect(structuredDataTestResult.structuredData.microdata.SocialMediaPosting[0].publisher).toEqual('ACME')
    expect(structuredDataTestResult.structuredData.microdata.SocialMediaPosting[0].Organization).toEqual('ACME')
    expect(structuredDataTestResult.structuredData.microdata.SocialMediaPosting[0].image.url).toEqual('http://example.com/path-to-article-image.jpg')
    expect(structuredDataTestResult.structuredData.microdata.SocialMediaPosting[0].associatedMedia.url).toEqual('http://example.com/path-to-article-image.jpg')
  })
})
