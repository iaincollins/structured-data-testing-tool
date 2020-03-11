#! /usr/bin/env node
/**
 * This script is a command line tool to handle fetching and parsing
 * a list of schemas from Schema.org and saving them to a file which
 * is then included with the module, so the list can be referenced
 * quickly and without a run time dependency on schema.org.
 * 
 * @TODO It may be possible to replace this script that something
 * that uses the metadata in the schema.org directory (which is
 * a CSV export).
 */
const fs = require('fs')
const fetch = require('node-fetch')
const schemaOrgTreeUrl = `https://schema.org/docs/tree.jsonld`
const outputFile = `${__dirname}/../schemas.json`

// From https://schema.org/DataType
const dataTypes = [
  {
    name: 'DataType',
    description: 'The basic data types such as Integers, Strings, etc.',
    depth: 0,
  },
  {
    name: 'Boolean',
    description: 'Boolean: True or False.',
    depth: 1,
    subClassOf: 'DataType'
  },
  {
    name: 'Date',
    description: 'A date value in ISO 8601 date format.',
    depth: 1,
    subClassOf: 'DataType'
  },
  {
    name: 'DateTime',
    description: 'A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601).',
    depth: 1,
    subClassOf: 'DataType'
  },
  {
    name: 'Number',
    description: `Data type: Number. Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols. Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.`,
    depth: 1,
    subClassOf: 'DataType'
  },
  {
    name: 'Text',
    description: 'Data type: Text.',
    depth: 1,
    subClassOf: 'DataType'
  },
  {
    name: 'Time',
    description: 'A point in time recurring on multiple days in the form "hh:mm:ss[Z|(+|-)hh:mm]".',
    depth: 1,
    subClassOf: 'DataType'
  }
]

const fetchSchemaOrgTree = async() => {
  const req = await fetch(schemaOrgTreeUrl)
  const json = await req.json()
  const schemas = {}
  _flattenSchemaOrgTree(json, schemas, 0)
  // Data types are not included in the JSON export, so are added manually here
  dataTypes.map(dataType => {
    schemas[dataType.name] = dataType
  })
  return schemas
}

function _flattenSchemaOrgTree(srcObj, targetObj, depth) {
  const obj = srcObj

  if (obj.hasOwnProperty('@type') && obj['@type'] == 'rdfs:Class' &&
      obj.hasOwnProperty('@id') &&
      obj.hasOwnProperty('description')) {

    const name = obj['@id'].replace(/^schema:/, '')

    targetObj[name] = {
      name,
      description: obj['description'],
      depth: depth
    }

    if (obj.hasOwnProperty('rdfs:subClassOf')) {
      targetObj[name].subClassOf = obj['rdfs:subClassOf'].replace(/^schema:/, '')
    }
  } else {
    console.error("Unsupported object ", obj)
  }

  if (obj.children && Array.isArray(obj.children)) {
    ++depth
    obj.children.map(childObj => {
      _flattenSchemaOrgTree(childObj, targetObj, depth)
    })
  }
}

(async () => {
  const schemas = await fetchSchemaOrgTree()
  const numberOfSchemasFound = Object.keys(schemas).length
  try {
    if (numberOfSchemasFound < 1000) {
      console.error(`Error: Found ${numberOfSchemasFound} schemas on schema.org but expected to find >= 1000`)
      process.exit(1)
    }
    
    fs.writeFileSync(outputFile, JSON.stringify(schemas, null, 2))
    console.log(`Saved ${numberOfSchemasFound} schemas from schema.org to 'schemas.json'.`)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()