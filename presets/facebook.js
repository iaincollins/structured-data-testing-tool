// Based on properties as described at http://ogp.me
const Facebook = {
  name: 'Facebook',
  description: 'Suggested metatags for Facebook',
  url: 'https://developers.facebook.com/docs/sharing/webmasters',
  tests: [
    { test: `"og:title"`, type: 'metatag', description: 'must have page title' },
    { test: `"og:type"`, type: 'metatag', description: 'must have page type' },
    { test: `"og:url"`, type: 'metatag', description: 'must have url' },
    { test: `"og:image" || "og:image:src"`, type: 'metatag', description: 'must have image url' },
    { test: `"og:image:alt"`, type: 'metatag', description: 'must have image alt text' },
    { test: `"og:description"`, type: 'metatag', warning: true, description: 'should have page description' },
    { test: `"og:site_name"`, type: 'metatag', warning: true, description: 'should have account username' },
    { test: `"og:locale"`, type: 'metatag', warning: true, description: 'should have locale' },
  ],
}

module.exports = {
  Facebook
}