const SocialMediaPosting = {
  name: 'SocialMediaPosting',
  description: 'A post to a social media platform, including blog posts, tweets, Facebook posts, etc.',
  schema: 'SocialMediaPosting',
  tests: [
    // Expected by Google
    { test: `SocialMediaPosting` },
    { test: `SocialMediaPosting[*]."@type"`, expect: 'SocialMediaPosting' },
    // Warnings
    { test: `SocialMediaPosting[*].headline`, warning: true },
    { test: `SocialMediaPosting[*].image`, warning: true },
  ],
}

module.exports = {
  SocialMediaPosting
}