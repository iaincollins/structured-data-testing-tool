const BlogPosting = {
  name: 'BlogPosting',
  description: 'A blog post.',
  schema: 'BlogPosting',
  tests: [
    // Expected by Google
    { test: `BlogPosting`, expect: true },
    { test: `BlogPosting[*]."@type"`, expect: 'BlogPosting' },
    { test: `BlogPosting[*].author`, expect: true },
    { test: `BlogPosting[*].datePublished`, expect: true },
    { test: `BlogPosting[*].headline`, expect: true },
    { test: `BlogPosting[*].image`, expect: true },
    { test: `BlogPosting[*].publisher."@type"`, expect: true },
    { test: `BlogPosting[*].publisher.name`, expect: true },
    { test: `BlogPosting[*].publisher.logo`, expect: true },
    { test: `BlogPosting[*].publisher.logo.url`, expect: true },
    // Warnings
    { test: `BlogPosting[*].dateModified`, expect: true, warning: true },
    { test: `BlogPosting[*].mainEntityOfPage`, expect: true, warning: true },
  ]
}

module.exports = {
  BlogPosting
}