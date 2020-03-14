// See https://developer.twitter.com/ for latest documentation
const Twitter = {
  name: 'Twitter',
  description: 'Suggested metatags for Twitter',
  url: 'https://developer.twitter.com/en/docs/tweets/optimize-with-cards',
  tests: [
    { test: `"twitter:card"`, type: 'metatag', description: 'must have card type' },
    { test: `"twitter:title"`, type: 'metatag', description: 'must have title' },
    { test: `"twitter:description"`, type: 'metatag', description: 'must have description' },
    { test: `"twitter:image" || "twitter:image:src"`, type: 'metatag', description: 'must have image url' },
    { test: `"twitter:image:alt"`, type: 'metatag', description: 'must have image alt text' },
    { test: `"twitter:site"`, type: 'metatag', warning: true, description: 'should have account username' },
    { test: `"twitter:creator"`, type: 'metatag', warning: true, description: 'should have username of content creator' },
  ],
}

module.exports = {
  Twitter
}