const LiveBlogPosting = {
  name: 'LiveBlogPosting',
  description: 'A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.',
  schema: 'LiveBlogPosting',
  conditional: {
    test: 'LiveBlogPosting'
  },
  tests: [
    // Expected by Google
    { test: `LiveBlogPosting` },
    { test: `LiveBlogPosting[*]."@type"`, expect: 'LiveBlogPosting' },
    // Warnings
    { test: `LiveBlogPosting[*].coverageEndTime`, warning: true },
    { test: `LiveBlogPosting[*].coverageStartTime`, warning: true },
  ],
}

module.exports = {
  LiveBlogPosting
}