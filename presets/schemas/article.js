
const _articleSchemaTests = (schema) => {
  return {
    tests: [
      // Expected by Google
      { test: `${schema}`, expect: true, schema },
      { test: `${schema}[*]."@type"`, expect: schema, schema },
      { test: `${schema}[*].author`, expect: true, schema },
      { test: `${schema}[*].datePublished`, expect: true, schema },
      { test: `${schema}[*].headline`, expect: true, schema },
      { test: `${schema}[*].image`, expect: true, schema },
      { test: `${schema}[*].publisher."@type"`, expect: true, schema },
      { test: `${schema}[*].publisher.name`, expect: true, schema },
      { test: `${schema}[*].publisher.logo`, expect: true, schema },
      { test: `${schema}[*].publisher.logo.url`, expect: true, schema },
      // Warnings
      { test: `${schema}[*].dateModified`, expect: true, schema, warning: true },
      { test: `${schema}[*].mainEntityOfPage`, expect: true, schema, warning: true },
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

const AnalysisNewsArticle = {
  ..._articleSchemaTests('AnalysisNewsArticle'),
  description: 'AnalysisNewsArticle schema data'
}

const AskPublicNewsArticle = {
  ..._articleSchemaTests('AskPublicNewsArticle'),
  description: 'AskPublicNewsArticle schema data'
}

const BackgroundNewsArticle = {
  ..._articleSchemaTests('BackgroundNewsArticle'),
  description: 'BackgroundNewsArticle schema data'
}

const OpinionNewsArticle = {
  ..._articleSchemaTests('OpinionNewsArticle'),
  description: 'OpinionNewsArticle schema data'
}

const ReportageNewsArticle = {
  ..._articleSchemaTests('ReportageNewsArticle'),
  description: 'ReportageNewsArticle schema data'
}

const ReviewNewsArticle = {
  ..._articleSchemaTests('ReviewNewsArticle'),
  description: 'ReviewNewsArticle schema data'
}

module.exports = {
  Article,
  NewsArticle,
  AnalysisNewsArticle,
  AskPublicNewsArticle,
  BackgroundNewsArticle,
  OpinionNewsArticle,
  ReportageNewsArticle,
  ReviewNewsArticle
}