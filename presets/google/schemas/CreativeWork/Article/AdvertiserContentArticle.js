const { _simpleArticlePrototype } = require('../Article')

const AdvertiserContentArticle = {
  ..._simpleArticlePrototype('AdvertiserContentArticle'),
  description: 'An Article that an external entity has paid to place or to produce to its specifications. Includes advertorials, sponsored content, native advertising and other paid content.'
}

module.exports = {
  AdvertiserContentArticle
}