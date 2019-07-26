const fs = require('fs')

// Load at runtime so is queried once and cached in memory
const schemas = JSON.parse(fs.readFileSync(`${__dirname}/../schemas.json`).toString())

const getSchema = (schema) => {
  return schemas.hasOwnProperty(schema) ? schemas[schema] : null
}

module.exports = {
  getSchema,
  schemas
}