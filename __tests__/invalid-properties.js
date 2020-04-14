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

    const expectedTestsPassed = [
      'ReportageNewsArticle[0]',
      'ReportageNewsArticle[0]."@context"',
      'ReportageNewsArticle[0]."@type"',
      'ReportageNewsArticle[0]."author"',
      'ReportageNewsArticle[0]."dateModified"',
      'ReportageNewsArticle[0]."datePublished"',
      'ReportageNewsArticle[0]."headline"',
      'ReportageNewsArticle[0]."publisher"',
      'ReportageNewsArticle[0]."image"',
      'ReportageNewsArticle[0]."mainEntityOfPage"',
      'ReportageNewsArticle[0]."publisher"."@type"',
      'ReportageNewsArticle[0]."publisher"."name"',
      'ReportageNewsArticle[0]."publisher"."logo"."@type"',
      'ReportageNewsArticle[0]."publisher"."logo"."url"'
    ]

    const testsPassed = result.passed.map(testsPassed => {
      return testsPassed.test;
    })

    expect(testsPassed).toEqual(expectedTestsPassed)

    expect(result.schemas.length).toEqual(1)
    expect(result.warnings.length).toEqual(0)
    expect(result.failed.length).toBeGreaterThan(1)
  })

  // @TODO Enable this when validation of nested properties is supported
  test.skip('should warn when invalid properties are found in nested schema objects', async () => {
    const result = await structuredDataTest(html)
    .then(response => response)
    .catch(err => err.res)

    expect(result.schemas.length).toEqual(1)
    expect(result.passed.length).toBeGreaterThan(10)
    expect(result.warnings.length).toEqual(0)

    // Currently finds 2, but should find either 3, 4 or 5 (depending on how they are counted).
    // Validation of poperties in nested schema is not yet supported, so it is not able to find
    // the invalid property 'publisher > invalidProperty3' that is in the fixture.
    // The goal is that this should be supported in a future release.
    expect(result.failed.length).toEqual(4)
  })

})
