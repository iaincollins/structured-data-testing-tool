const AdvertiserContentArticle = require('./presets/schemas/CreativeWork/Article/AdvertiserContentArticle')
const Article = require('./presets/schemas/CreativeWork/Article')
const NewsArticle = require('./presets/schemas/CreativeWork/Article/NewsArticle')
const Report = require('./presets/schemas/CreativeWork/Article/Report')
const SatiricalArticle = require('./presets/schemas/CreativeWork/Article/SatiricalArticle')
const ScholarlyArticle = require('./presets/schemas/CreativeWork/Article/ScholarlyArticle')
const SocialMediaPosting = require('./presets/schemas/CreativeWork/SocialMediaPosting/SocialMediaPosting')
const BlogPosting = require('./presets/schemas/CreativeWork/SocialMediaPosting/BlogPosting')
const LiveBlogPosting = require('./presets/schemas/CreativeWork/SocialMediaPosting/BlogPosting/LiveBlogPosting')
const DiscussionForumPosting = require('./presets/schemas/CreativeWork/SocialMediaPosting/DiscussionForumPosting')
const TechArticle = require('./presets/schemas/CreativeWork/Article/TechArticle')
const ClaimReview = require('./presets/schemas/ClaimReview')
const Twitter = require('./presets/twitter')
const Facebook = require('./presets/facebook')

module.exports = {
  ...AdvertiserContentArticle,
  ...Article,
  ...NewsArticle,
  ...Report,
  ...SatiricalArticle,
  ...ScholarlyArticle,
  ...SocialMediaPosting,
  ...BlogPosting,
  ...LiveBlogPosting,
  ...DiscussionForumPosting,
  ...TechArticle,
  ...ClaimReview,
  ...Twitter,
  ...Facebook
}