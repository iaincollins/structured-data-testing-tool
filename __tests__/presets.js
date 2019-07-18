const presets = require('../presets')

for (let preset in presets) {
  test(`should have valid tests for ${preset} preset`, () => {
    expect(presets).toHaveProperty(preset)
    expect(presets[preset]).toHaveProperty('tests')
    expect(presets[preset].tests.length).toBeGreaterThan(0)    
    presets[preset].tests.map(test => {
      expect(test).toHaveProperty('test')
      expect(test).toHaveProperty('expect')
      expect(test).toHaveProperty('schema')
      expect(test.schema).toEqual(preset)
    })
  })
}