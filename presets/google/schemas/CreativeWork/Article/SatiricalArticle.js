const { _simpleArticlePrototype } = require('../Article')

const SatiricalArticle = {
  ..._simpleArticlePrototype('SatiricalArticle'),
  description: 'An Article whose content is primarily satirical in nature, i.e. unlikely to be literally true. A satirical article is sometimes but not necessarily also a NewsArticle. ScholarlyArticles are also sometimes satirized.'
}

module.exports = {
  SatiricalArticle
}