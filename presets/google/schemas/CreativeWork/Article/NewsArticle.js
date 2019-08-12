const { _articlePrototype } = require('../Article')

const NewsArticle = {
  ..._articlePrototype('NewsArticle'),
  description: 'A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.'
}

const AnalysisNewsArticle = {
  ..._articlePrototype('AnalysisNewsArticle'),
  description: 'An AnalysisNewsArticle is a NewsArticle that, while based on factual reporting, incorporates the expertise of the author/producer, offering interpretations and conclusions.'
}

const AskPublicNewsArticle = {
  ..._articlePrototype('AskPublicNewsArticle'),
  description: 'A NewsArticle expressing an open call by a NewsMediaOrganization asking the public for input, insights, clarifications, anecdotes, documentation, etc., on an issue, for reporting purposes.'
}

const BackgroundNewsArticle = {
  ..._articlePrototype('BackgroundNewsArticle'),
  description: 'A NewsArticle providing historical context, definition and detail on a specific topic (aka "explainer" or "backgrounder"). '
}

const OpinionNewsArticle = {
  ..._articlePrototype('OpinionNewsArticle'),
  description: 'An OpinionNewsArticle is a NewsArticle that primarily expresses opinions rather than journalistic reporting of news and events.'
}

const ReportageNewsArticle = {
  ..._articlePrototype('ReportageNewsArticle'),
  description: 'The ReportageNewsArticle type is a subtype of NewsArticle representing news articles which are the result of journalistic news reporting conventions.'
}

const ReviewNewsArticle = {
  ..._articlePrototype('ReviewNewsArticle'),
  description: "A NewsArticle and CriticReview providing a professional critic's assessment of a service, product, performance, or artistic or literary work."
}

module.exports = {
  NewsArticle,
  AnalysisNewsArticle,
  AskPublicNewsArticle,
  BackgroundNewsArticle,
  OpinionNewsArticle,
  ReportageNewsArticle,
  ReviewNewsArticle
}