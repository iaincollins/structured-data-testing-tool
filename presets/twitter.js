const { testForMetatags } = require('../lib/metatags')

// See https://developer.twitter.com/ for latest documentation
const Twitter = testForMetatags({
  name: 'Twitter',
  description: 'Suggested meta tags for Twitter',
  required: [
    'twitter:card',
    'twitter:title',
    'twitter:description',
    'twitter:image:alt'
  ],
  suggested: [
    'twitter:site',
    'twitter:creator'
  ]
})

// Image can be twitter:image or twitter:image:src
Twitter.tests.push({
  test: '"twitter:image" || "twitter:image:src"',
  type: 'metatag',
  group: 'Twitter'
})

module.exports = {
  Twitter
}