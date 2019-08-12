const Google = require('./presets/google')
const Twitter = require('./presets/twitter')
const Facebook = require('./presets/facebook')
const Social = require('./presets/social')

module.exports = {
  ...Google,
  ...Twitter,
  ...Facebook,
  ...Social,
}