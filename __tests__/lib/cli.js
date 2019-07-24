const cli = require('../../lib/cli')

describe('CLI library', () => {
  test('should export info() function', () => {
    expect(cli).toHaveProperty('info')
    // cli.info()
  })

  test('should export success() function', () => {
    expect(cli).toHaveProperty('success')
    // cli.success()
  })

  test('should export warn() function', () => {
    expect(cli).toHaveProperty('warn')
    // cli.warn()
  })

  test('should export error() function', () => {
    expect(cli).toHaveProperty('error')
    // cli.error()
  })

  test('should export printTestResults() function', () => {
    expect(cli).toHaveProperty('printTestResults')
    // cli.printTestResults({})
  })

  test('should export printSupportedPresets() function', () => {
    expect(cli).toHaveProperty('printSupportedPresets')
   // cli.printSupportedPresets()
  })
})