const { getSchema } = require('../../lib/schemas')

describe.only('Schema library', () => {
  test('should return schema from getSchema() if schema exists', async () => {
    const schema = await getSchema('StupidType') // This is a real, valid schema intended for testing
    expect(schema.name).toEqual('StupidType')
    expect(schema.description).toEqual('A StupidType for testing.')
    expect(schema.depth).toEqual(1)
    expect(schema.subClassOf).toEqual('Thing')
  })

  test('should return null from getSchema() if schema does not exist', async () => {
    const schema = await getSchema('FakeSchemaName')
    expect(schema).toBeNull()
  })

  test('should return schema properties and parent classes for a schema from getSchema()', async () => {
    const schema = await getSchema('NewsArticle')
    expect(schema.name).toEqual('NewsArticle')
    expect(schema.classes).toEqual(["NewsArticle", "Article", "CreativeWork", "Thing"])
    expect(Object.keys(schema.properties).length).toEqual(125)
  })
})