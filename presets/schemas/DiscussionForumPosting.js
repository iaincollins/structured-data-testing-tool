const DiscussionForumPosting = {
  tests: [
    // Expected by Google
    { test: `DiscussionForumPosting`, expect: true, schema: 'DiscussionForumPosting' },
    { test: `DiscussionForumPosting[*]."@type"`, expect: 'DiscussionForumPosting', schema: 'DiscussionForumPosting' },
    // Warnings
    { test: `DiscussionForumPosting[*].headline`, expect: true, schema: 'DiscussionForumPosting', warning: true },
    { test: `DiscussionForumPosting[*].image`, expect: true, schema: 'DiscussionForumPosting', warning: true },
  ],
  description: 'DiscussionForumPosting schema data'
}

module.exports = {
  DiscussionForumPosting
}