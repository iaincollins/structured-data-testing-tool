const { _simpleArticlePrototype } = require('../Article')

const TechArticle = {
  ..._simpleArticlePrototype('TechArticle'),
  description: 'A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.'
}

const APIReference = {
  ..._simpleArticlePrototype('APIReference'),
  description: 'Reference documentation for application programming interfaces (APIs).'
}

module.exports = {
  TechArticle,
  APIReference
}