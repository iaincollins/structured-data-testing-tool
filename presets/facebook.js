const { testForMetatags } = require('../lib/metatags')

// @TOOD Review required and suggested tags for Facebook
const Facebook = testForMetatags({
  name: 'Facebook',
  required: [
    'og:type',
    'og:site_name',
    'og:description',
    'og:url'
  ],
  suggested: [
    'og:locale',
    'og:image',
    'og:image:alt'
  ]
})

Facebook.description = 'Suggested meta tags for Facebook'

module.exports = {
  Facebook
}