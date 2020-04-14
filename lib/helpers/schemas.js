function isSchemaOrgSchema(schema) {
  if (schema['@context'] && schema['@context'].match(/^(http|https):\/\/schema.org/))
    return true

  if (schema['@type'] && schema['@type'].match(/^(http|https):\/\/schema.org/))
    return true

  return false
}

function getSchemaTypeAndName(schema) {
  let structuredDataType = null
  let schemaName = schema

  if (schemaName.match(/^jsonld:/))
    [structuredDataType, schemaName] = [ 'jsonld', schema.replace(/^jsonld:/, '').replace(/^http:\/\/schema\.org\//, '') ]

  if (schemaName.match(/^rdfa:/))
    [structuredDataType, schemaName] = [ 'rdfa', schema.replace(/^rdfa:/, '').replace(/^http:\/\/schema\.org\//, '') ]

  if (schemaName.match(/^microdata:/))
    [structuredDataType, schemaName] = [ 'microdata', schema.replace(/^microdata:/, '').replace(/^http:\/\/schema\.org\//, '') ]

  return [structuredDataType, schemaName]
}

// Add a test for any schema explicitly specified (or that was detected)
function addTestsForSchemaOrgSchema(tests, name, groups, type, index) {
  tests.push({
    test: `${name}[${(typeof(index) === 'undefined') ? '*': index}]`,
    schema: name,
    type: type || 'any',
    group: name,
    groups: groups,
    description: (type) ? `Schema found in ${type}` : `Schema found`
  })
}

function findSchemasInStructuredData(structuredData) {
  const schemas = []

  const rdfa = Object.keys(structuredData.rdfa)
  rdfa.map(schema => {
    if (schema !== 'undefined' && !schemas.includes(schema)) schemas.push(`rdfa:${schema}`)
  })

  const microdata = Object.keys(structuredData.microdata)
  microdata.map(schema => {
    if (schema !== 'undefined' && !schemas.includes(schema)) schemas.push(`microdata:${schema}`)
  })


  const jsonld = Object.keys(structuredData.jsonld)
  jsonld.map(schema => {
    if (schema !== 'undefined' && !schemas.includes(schema)) schemas.push(`jsonld:${schema}`)
  })

  return schemas
}

module.exports = {
  isSchemaOrgSchema,
  getSchemaTypeAndName,
  addTestsForSchemaOrgSchema,
  findSchemasInStructuredData
}