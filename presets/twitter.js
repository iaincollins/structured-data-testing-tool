const { testForMetatags } = require('../helpers.js')

// @TOOD Review required and suggested tags for Twitter
const Twitter = testForMetatags({
  name: 'Twitter',
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

Twitter.description = 'Twitter metatags'

module.exports = {
  Twitter
}