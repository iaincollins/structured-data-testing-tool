
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
      expect(presets[preset]).toHaveProperty('tests')
      expect(presets[preset].tests.length).toBeGreaterThan(0)
      presets[preset].tests.map(test => {
        expect(test).toHaveProperty('test')
      })
    })
  }

  test(`should handle tests in custom preset correctly`, async () => { 
    const result = await structuredDataTest(html, { disablePresets: true, presets: [ CustomPreset ] })
    .then(response => { return response })
    .catch(err => { return err })
    expect(result.passed.length).toEqual(2)
    expect(result.failed.length).toEqual(2)
  })
})