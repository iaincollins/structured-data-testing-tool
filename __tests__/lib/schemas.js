const { getSchema } = require('../../lib/schemas')

describe('Schema library', () => {
  test('should return schema from getSchema() if schema exists', () => {
    const result = getSchema('StupidType') // This is a real, valid schema intended for testing
    expect(result.name).toEqual('StupidType')
    expect(result.description).toEqual('A StupidType for testing.')
    expect(result.depth).toEqual(1)
    expect(result.subClassOf).toEqual('Thing')
  })

  test('should return null from getSchema() if schema does not exist', () => {
    const result = getSchema('FakeSchemaName')
    expect(result).toBeNull()
  })
})