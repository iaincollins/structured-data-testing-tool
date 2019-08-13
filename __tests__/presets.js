
const fs = require('fs')
const { structuredDataTest } = require('../index')
const presets = require('../presets')

const testFile = '__tests__/fixtures/example.html'
const html = fs.readFileSync(testFile)

const CustomPreset = {
  name: 'Custom Preset',
  description: 'Custom preset for testing…',
  tests: [
    { test: `Article[*].author` }, // Should pass
    { test: `Article[*].doesNotExist` }, // Should fail
    { test: `Article[*].headline`, expect: /^[A-z0-9!? ]+$/g }, // Should pass
    { test: `Article[*].headline`, expect: /^[0-9]+$/g, }, // Should fail
  ]
}

describe('Presets', () => {
  for (let preset in presets) {
    if (preset.startsWith('_')) continue
    test(`should have valid tests for ${preset} preset`, () => {
      expect(presets).toHaveProperty(preset)
      // Every preset should define a name, a description and a test group
      // If it tests a schema it should also define that.
      // They can optionally define a group as well (if none specified, name will be used).
      expect(presets[preset]).toHaveProperty('name')
      expect(presets[preset]).toHaveProperty('description')
    })
  }

  // @FIXME This test covers too much at once, should split out error handling checks
  test(`should handle tests in custom preset correctly and handle errors properly`, async () => { 
    const result = await structuredDataTest(html, { presets: [ CustomPreset ] })
    .then(response => { return response })
    .catch(err => { return err })
    expect(result.res.passed.length).toEqual(7)
    expect(result.res.failed.length).toEqual(2)
  })
})