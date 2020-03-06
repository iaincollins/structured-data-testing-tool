const schema = 'WebPage'

const WebPage = {
  name: schema,
  description: 'A web page.',
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
    { test: `${schema}[*].mainEntityOfPage`, optional: true },
    { test: `${schema}[*].breadcrumb`, optional: true },
    { test: `${schema}[*].publisher`, optional: true },
    { test: `${schema}[*].publisher."@type"`, optional: true },
    { test: `${schema}[*].publisher.name`, optional: true },
    { test: `${schema}[*].publisher.logo`, optional: true },
    { test: `${schema}[*].publisher.logo.url`, optional: true },
  ]
}

module.exports = {
  WebPage
}