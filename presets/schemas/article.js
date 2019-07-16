
const _articleSchemaTests = (schema) => {
  return {
    tests: [
      { test: `${schema}`, expect: true, schema },
      { test: `${schema}[*]."@type"`, expect: schema, schema },
      { test: `${schema}[*].url`, expect: true, schema },
      { test: `${schema}[*].mainEntityOfPage`, expect: true, schema, warning: true },
      { test: `${schema}[*].datePublished`, expect: true, schema },
      { test: `${schema}[*].dateModified`, expect: true, schema, warning: true },
      { test: `${schema}[*].author`, expect: true, schema },
      { test: `${schema}[*].author.name`, expect: true, schema },
      { test: `${schema}[*].image`, expect: true, schema },
      { test: `${schema}[*].headline`, expect: true, schema },
      { test: `${schema}[*].publisher`, expect: true, schema },
      { test: `${schema}[*].publisher."@type"`, expect: true, schema },
      { test: `${schema}[*].publisher.name`, expect: true, schema },
      { test: `${schema}[*].publisher.logo`, expect: true, schema, warning: true },
    ]
  }
}

const Article = {
  ..._articleSchemaTests('Article'),
  description: 'Article schema data'
}

const NewsArticle = {
  ..._articleSchemaTests('NewsArticle'),
  description: 'NewsArticle schema data'
}

const ReportageNewsArticle = {
  ..._articleSchemaTests('ReportageNewsArticle'),
  description: 'ReportageNewsArticle schema data'
}

module.exports = {
  Article,
  NewsArticle,
  ReportageNewsArticle,
}