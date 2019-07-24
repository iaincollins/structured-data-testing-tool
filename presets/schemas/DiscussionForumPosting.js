const DiscussionForumPosting = {
  name: 'DiscussionForumPosting',
  description: 'A posting to a discussion forum.',
  schema: 'DiscussionForumPosting',
  tests: [
    // Expected by Google
    { test: `DiscussionForumPosting` },
    { test: `DiscussionForumPosting[*]."@type"`, expect: 'DiscussionForumPosting' },
    // Warnings
    { test: `DiscussionForumPosting[*].headline`, warning: true },
    { test: `DiscussionForumPosting[*].image`, warning: true },
  ],
}

module.exports = {
  DiscussionForumPosting
}