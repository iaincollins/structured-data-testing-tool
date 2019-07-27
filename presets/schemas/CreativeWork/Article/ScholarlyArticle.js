const { _simpleArticlePrototype } = require('../Article')

const ScholarlyArticle = {
  ..._simpleArticlePrototype('ScholarlyArticle'),
  description: 'A scholarly article.'
}

const MedicalScholarlyArticle = {
  ..._simpleArticlePrototype('MedicalScholarlyArticle'),
  description: 'A scholarly article in the medical domain.'
}

module.exports = {
  ScholarlyArticle,
  MedicalScholarlyArticle
}