const ArticlePresets = require('./presets/schemas/Article')
const SocialMediaPosting = require('./presets/schemas/SocialMediaPosting')
const DiscussionForumPosting = require('./presets/schemas/DiscussionForumPosting')
const BlogPosting = require('./presets/schemas/BlogPosting')
const LiveBlogPosting = require('./presets/schemas/LiveBlogPosting')
const Twitter = require('./presets/twitter')
const Facebook = require('./presets/facebook')

SocialMediaPosting,
DiscussionForumPosting,
BlogPosting,
LiveBlogPosting

module.exports = {
  ...ArticlePresets,
  ...SocialMediaPosting,
  ...DiscussionForumPosting,
  ...BlogPosting,
  ...LiveBlogPosting,
  ...Twitter,
  ...Facebook
}