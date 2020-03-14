const WebPage = require('./google/schemas/CreativeWork/WebPage')
const ClaimReview = require('./google/schemas/ClaimReview')
const Organization = require('./google/schemas/Organization')

// Article schemas
const Article = require('./google/schemas/CreativeWork/Article')
const NewsArticle = require('./google/schemas/CreativeWork/Article/NewsArticle')
const AdvertiserContentArticle = require('./google/schemas/CreativeWork/Article/AdvertiserContentArticle')
const Report = require('./google/schemas/CreativeWork/Article/Report')
const TechArticle = require('./google/schemas/CreativeWork/Article/TechArticle')
const SatiricalArticle = require('./google/schemas/CreativeWork/Article/SatiricalArticle')
const ScholarlyArticle = require('./google/schemas/CreativeWork/Article/ScholarlyArticle')

// SocialMediaPosting schemas
const SocialMediaPosting = require('./google/schemas/CreativeWork/SocialMediaPosting/SocialMediaPosting')
const BlogPosting = require('./google/schemas/CreativeWork/SocialMediaPosting/BlogPosting')
const LiveBlogPosting = require('./google/schemas/CreativeWork/SocialMediaPosting/BlogPosting/LiveBlogPosting')
const DiscussionForumPosting = require('./google/schemas/CreativeWork/SocialMediaPosting/DiscussionForumPosting')

const Google = {
  name: 'Google',
  description: 'Check for common markup used by Google',
  url: 'https://developers.google.com/search/docs/guides/intro-structured-data',
  presets: [
    ...Object.keys(WebPage).map(schema => WebPage[schema]),
    ...Object.keys(ClaimReview).map(schema => ClaimReview[schema]),
    ...Object.keys(Organization).map(schema => Organization[schema]),    
    // Article schemas
    ...Object.keys(Article).map(schema => Article[schema]),
    ...Object.keys(NewsArticle).map(schema => NewsArticle[schema]),
    ...Object.keys(AdvertiserContentArticle).map(schema => AdvertiserContentArticle[schema]),
    ...Object.keys(Report).map(schema => Report[schema]),
    ...Object.keys(TechArticle).map(schema => TechArticle[schema]),
    ...Object.keys(SatiricalArticle).map(schema => SatiricalArticle[schema]),
    ...Object.keys(ScholarlyArticle).map(schema => ScholarlyArticle[schema]),
    // SocialMediaPosting schemas
    ...Object.keys(SocialMediaPosting).map(schema => SocialMediaPosting[schema]),
    ...Object.keys(BlogPosting).map(schema => BlogPosting[schema]),
    ...Object.keys(LiveBlogPosting).map(schema => LiveBlogPosting[schema]),
    ...Object.keys(DiscussionForumPosting).map(schema => DiscussionForumPosting[schema])
  ]
}

module.exports = {
  Google
}