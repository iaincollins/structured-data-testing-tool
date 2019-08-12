const { _simpleArticlePrototype } = require('../Article')

const DiscussionForumPosting = {
  ..._simpleArticlePrototype('DiscussionForumPosting'),
  description: 'A posting to a discussion forum.'
}

module.exports = {
  DiscussionForumPosting
}