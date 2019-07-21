
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
  description: 'An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.'
}

const NewsArticle = {
  ..._articleSchemaTests('NewsArticle'),
  description: 'A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.'
}

const AnalysisNewsArticle = {
  ..._articleSchemaTests('AnalysisNewsArticle'),
  description: 'An AnalysisNewsArticle is a NewsArticle that, while based on factual reporting, incorporates the expertise of the author/producer, offering interpretations and conclusions.'
}

const AskPublicNewsArticle = {
  ..._articleSchemaTests('AskPublicNewsArticle'),
  description: 'A NewsArticle expressing an open call by a NewsMediaOrganization asking the public for input, insights, clarifications, anecdotes, documentation, etc., on an issue, for reporting purposes.'
}

const BackgroundNewsArticle = {
  ..._articleSchemaTests('BackgroundNewsArticle'),
  description: 'A NewsArticle providing historical context, definition and detail on a specific topic (aka "explainer" or "backgrounder"). '
}

const OpinionNewsArticle = {
  ..._articleSchemaTests('OpinionNewsArticle'),
  description: 'An OpinionNewsArticle is a NewsArticle that primarily expresses opinions rather than journalistic reporting of news and events.'
}

const ReportageNewsArticle = {
  ..._articleSchemaTests('ReportageNewsArticle'),
  description: 'The ReportageNewsArticle type is a subtype of NewsArticle representing news articles which are the result of journalistic news reporting conventions.'
}

const ReviewNewsArticle = {
  ..._articleSchemaTests('ReviewNewsArticle'),
  description: "A NewsArticle and CriticReview providing a professional critic's assessment of a service, product, performance, or artistic or literary work."
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