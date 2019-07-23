const LiveBlogPosting = {
  name: 'LiveBlogPosting',
  description: 'A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.',
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