const { _simpleArticlePrototype } = require('../Article')

const SocialMediaPosting = {
  ..._simpleArticlePrototype('SocialMediaPosting'),
  description: 'A post to a social media platform, including blog posts, tweets, Facebook posts, etc.'
}

module.exports = {
  SocialMediaPosting
}