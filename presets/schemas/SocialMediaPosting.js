const SocialMediaPosting = {
  name: 'SocialMediaPosting',
  description: 'SocialMediaPosting schema data',
  schema: 'SocialMediaPosting',
  tests: [
    // Expected by Google
    { test: `SocialMediaPosting`, expect: true },
    { test: `SocialMediaPosting[*]."@type"`, expect: 'SocialMediaPosting' },
    // Warnings
    { test: `SocialMediaPosting[*].headline`, expect: true, warning: true },
    { test: `SocialMediaPosting[*].image`, expect: true, warning: true },
  ],
}

module.exports = {
  SocialMediaPosting
}