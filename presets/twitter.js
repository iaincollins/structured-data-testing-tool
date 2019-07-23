const { testForMetatags } = require('../lib/metatags')

// @TOOD Review required and suggested tags for Twitter
const Twitter = testForMetatags({
  name: 'Twitter',
  description: 'Suggested meta tags for Twitter',
  required: [
    'twitter:card',
    'twitter:description',
  ],
  suggested: [
    'twitter:title',
    'twitter:site',
    'twitter:creator',
    'twitter:image:src',
    'twitter:image:alt',
    'twitter:domain'
  ]
})

module.exports = {
  Twitter
}