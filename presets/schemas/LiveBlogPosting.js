const LiveBlogPosting = {
  name: 'LiveBlogPosting',
  description: 'LiveBlogPosting schema data',
  schema: 'LiveBlogPosting',
  tests: [
    // Expected by Google
    { test: `LiveBlogPosting`, expect: true },
    { test: `LiveBlogPosting[*]."@type"`, expect: 'LiveBlogPosting' },
    // Warnings
    { test: `LiveBlogPosting[*].coverageEndTime`, expect: true, warning: true },
    { test: `LiveBlogPosting[*].coverageStartTime`, expect: true, warning: true },
  ],
}

module.exports = {
  LiveBlogPosting
}