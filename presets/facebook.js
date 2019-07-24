const { testForMetatags } = require('../lib/metatags')

// Based on properties as described at http://ogp.me
const Facebook = testForMetatags({
  name: 'Facebook',
  description: 'Suggested meta tags for Facebook',
  required: [
    'og:title',
    'og:type',
    'og:url',
    'og:image:alt' // Required if image specified (and image is listed as required)
  ],
  suggested: [
    'og:description',
    'og:site_name',
    'og:locale'
  ]
})

// Image can be og:image or og:image:url
Facebook.tests.push({
  test: '"og:image" || "og:image:url"',
  type: 'metatag',
  group: 'Facebook'
})

module.exports = {
  Facebook
}