const LiveBlogPosting = {
  tests: [
    // Expected by Google
    { test: `LiveBlogPosting`, expect: true, schema: 'LiveBlogPosting' },
    { test: `LiveBlogPosting[*]."@type"`, expect: 'LiveBlogPosting', schema: 'LiveBlogPosting' },
    // Warnings
    { test: `LiveBlogPosting[*].coverageEndTime`, expect: true, schema: 'LiveBlogPosting', warning: true },
    { test: `LiveBlogPosting[*].coverageStartTime`, expect: true, schema: 'LiveBlogPosting', warning: true },
  ],
  description: 'LiveBlogPosting schema data'
}

module.exports = {
  LiveBlogPosting
}