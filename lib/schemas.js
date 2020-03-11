const csv = require('csvtojson')

const fs = require('fs')

// Load at runtime so is queried once and cached in memory
const schemas = JSON.parse(fs.readFileSync(`${__dirname}/../schemas.json`).toString())

async function getSchema(schemaName) {
  return schemas.hasOwnProperty(schemaName) ? await _getSchemaWithProperties(schemaName) : Promise.resolve(null)
}

async function _getSchemaWithProperties(schemaName) {
  return new Promise(async resolve => {
    const schemaProperties = await csv().fromFile(`${__dirname}/../schema.org/schema-properties.csv`)

    let schemaWithProperties = schemas[schemaName]
    schemaWithProperties.properties = {}

    // Get all schemas this schema is a subclass of
    _getParentSchemas(schemaName, (schemaNames) =>{
      schemaWithProperties.classes = schemaNames

      // Add all properties belonging to the specified schema AND any schema is a subclass of
      for (const schemaName of schemaNames) {
        for (const schemaProperty of schemaProperties) {
          const schemaUri = `http://schema.org/${schemaName}`
          if (schemaProperty.domainIncludes.includes(schemaUri) &&
              !schemaWithProperties.properties[schemaProperty.label]) {
            schemaWithProperties.properties[schemaProperty.label] = {
              name: schemaProperty.label,
              value: schemaProperty.rangeIncludes.split(', '),
              description: schemaProperty.comment
            }
          }
        }
      }

      resolve(schemaWithProperties)
    })
  })
}

async function _getParentSchemas(schemaName, callback, schemaClasses) {
  // Get all the parent classes of a schema
  if (!schemaClasses)
    schemaClasses = [schemaName]

  if (schemas[schemaName] && schemas[schemaName].subClassOf) {
    schemaClasses.push(schemas[schemaName].subClassOf)
    _getParentSchemas(schemas[schemaName].subClassOf, callback, schemaClasses)
  } else {
    callback(schemaClasses)
  }
}

module.exports = {
  getSchema,
  schemas
}