const Facebook = require('./facebook')
const Twitter = require('./twitter')

const SocialMedia = {
  name: 'SocialMedia',
  description: 'Suggested for sharing content on social media sites',
  presets: [
    ...Object.keys(Facebook).map(schema => Facebook[schema]),
    ...Object.keys(Twitter).map(schema => Twitter[schema])
  ]
}

module.exports = {
  SocialMedia
}