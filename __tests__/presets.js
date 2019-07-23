const presets = require('../presets')

describe('preset schema tests', () => {
  for (let preset in presets) {
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
        expect(test).toHaveProperty('expect')
      })
    })
  }
})