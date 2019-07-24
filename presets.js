const ArticlePresets = require('./presets/schemas/Article')
const SocialMediaPosting = require('./presets/schemas/SocialMediaPosting')
const DiscussionForumPosting = require('./presets/schemas/DiscussionForumPosting')
const BlogPosting = require('./presets/schemas/BlogPosting')
const LiveBlogPosting = require('./presets/schemas/LiveBlogPosting')
const ClaimReview = require('./presets/schemas/ClaimReview')
const Twitter = require('./presets/twitter')
const Facebook = require('./presets/facebook')

module.exports = {
  ...ArticlePresets,
  ...SocialMediaPosting,
  ...DiscussionForumPosting,
  ...BlogPosting,
  ...LiveBlogPosting,
  ...ClaimReview,
  ...Twitter,
  ...Facebook
}