const SocialMediaPosting = {
  name: 'SocialMediaPosting',
  description: 'A post to a social media platform, including blog posts, tweets, Facebook posts, etc.',
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