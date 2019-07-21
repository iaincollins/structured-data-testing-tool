const BlogPosting = {
  tests: [
    // Expected by Google
    { test: `BlogPosting`, expect: true, schema: 'BlogPosting' },
    { test: `BlogPosting[*]."@type"`, expect: 'BlogPosting', schema: 'BlogPosting' },
    { test: `BlogPosting[*].author`, expect: true, schema: 'BlogPosting' },
    { test: `BlogPosting[*].datePublished`, expect: true, schema: 'BlogPosting' },
    { test: `BlogPosting[*].headline`, expect: true, schema: 'BlogPosting' },
    { test: `BlogPosting[*].image`, expect: true, schema: 'BlogPosting' },
    { test: `BlogPosting[*].publisher."@type"`, expect: true, schema: 'BlogPosting' },
    { test: `BlogPosting[*].publisher.name`, expect: true, schema: 'BlogPosting' },
    { test: `BlogPosting[*].publisher.logo`, expect: true, schema: 'BlogPosting' },
    { test: `BlogPosting[*].publisher.logo.url`, expect: true, schema: 'BlogPosting' },
    // Warnings
    { test: `BlogPosting[*].dateModified`, expect: true, schema: 'BlogPosting', warning: true },
    { test: `BlogPosting[*].mainEntityOfPage`, expect: true, schema: 'BlogPosting', warning: true },
  ],
  description: 'BlogPosting schema data'
}

module.exports = {
  BlogPosting
}