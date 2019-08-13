const Facebook = require('./facebook')
const Twitter = require('./twitter')

// This is a simple preset, that shows how to combine two separate presets
const SocialMedia = {
  name: 'SocialMedia',
  description: 'Suggested markup for integration with social media sites',
  presets: [
    ...Object.keys(Facebook).map(schema => Facebook[schema]),
    ...Object.keys(Twitter).map(schema => Twitter[schema])
  ]
}

module.exports = {
  SocialMedia
}