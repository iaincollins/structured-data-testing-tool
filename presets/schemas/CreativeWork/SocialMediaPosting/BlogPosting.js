const BlogPosting = {
  name: 'BlogPosting',
  description: 'A blog post.',
  schema: 'BlogPosting',
  tests: [
    // Expected by Google
    { test: `BlogPosting` },
    { test: `BlogPosting[*]."@type"`, expect: 'BlogPosting' },
    { test: `BlogPosting[*].author` },
    { test: `BlogPosting[*].datePublished` },
    { test: `BlogPosting[*].headline` },
    { test: `BlogPosting[*].image` },
    { test: `BlogPosting[*].publisher."@type"` },
    { test: `BlogPosting[*].publisher.name` },
    { test: `BlogPosting[*].publisher.logo` },
    { test: `BlogPosting[*].publisher.logo.url` },
    // Warnings
    { test: `BlogPosting[*].dateModified`, warning: true },
    { test: `BlogPosting[*].mainEntityOfPage`, warning: true },
  ]
}

module.exports = {
  BlogPosting
}