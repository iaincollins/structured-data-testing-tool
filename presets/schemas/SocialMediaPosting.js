const SocialMediaPosting = {
  tests: [
    // Expected by Google
    { test: `SocialMediaPosting`, expect: true, schema: 'SocialMediaPosting' },
    { test: `SocialMediaPosting[*]."@type"`, expect: 'SocialMediaPosting', schema: 'SocialMediaPosting' },
    // Warnings
    { test: `SocialMediaPosting[*].headline`, expect: true, schema: 'SocialMediaPosting', warning: true },
    { test: `SocialMediaPosting[*].image`, expect: true, schema: 'SocialMediaPosting', warning: true },
  ],
  description: 'SocialMediaPosting schema data'
}

module.exports = {
  SocialMediaPosting
}