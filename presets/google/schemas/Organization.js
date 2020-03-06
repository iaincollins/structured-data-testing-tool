const schema = 'Organization'

const Organization = {
  name: schema,
  description: 'An organization such as a school, NGO, corporation, club, etc',
  schema: schema,
  conditional: {
    test: schema
  },
  tests: [
    { test: schema },
    { test: `${schema}[*]."@type"`, expect: schema },
    // Optional properties supported by Google (not an exhaustive list!)
    { test: `${schema}[*].name`, optional: true },
    { test: `${schema}[*].description`, optional: true },
    { test: `${schema}[*].url`, optional: true },
    { test: `${schema}[*].logo`, optional: true },
    { test: `${schema}[*].logo."@type"`, optional: true },
    { test: `${schema}[*].logo.url`, optional: true },
    { test: `${schema}[*].logo.caption`, optional: true },
  ]
}

module.exports = {
  Organization
}