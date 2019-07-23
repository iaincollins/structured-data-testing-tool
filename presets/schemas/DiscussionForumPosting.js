const DiscussionForumPosting = {
  name: 'DiscussionForumPosting',
  description: 'A posting to a discussion forum.',
  schema: 'DiscussionForumPosting',
  tests: [
    // Expected by Google
    { test: `DiscussionForumPosting`, expect: true },
    { test: `DiscussionForumPosting[*]."@type"`, expect: 'DiscussionForumPosting' },
    // Warnings
    { test: `DiscussionForumPosting[*].headline`, expect: true, warning: true },
    { test: `DiscussionForumPosting[*].image`, expect: true, warning: true },
  ],
}

module.exports = {
  DiscussionForumPosting
}