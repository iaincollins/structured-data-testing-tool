const ArticlePresets = require('./presets/schemas/article')
const { Twitter } = require('./presets/twitter')
const { Facebook } = require('./presets/facebook')

module.exports = {
  ...ArticlePresets,
  Twitter,
  Facebook
}