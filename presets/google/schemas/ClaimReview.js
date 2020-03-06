const schema = 'ClaimReview'

const ClaimReview = {
  name: schema,
  description: 'A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).',
  schema: schema,
  conditional: {
    test: schema
  },
  tests: [
    // Expected by Google
    { test: `${schema}` },
    { test: `${schema}[*]."@type"`, expect: schema },
    { test: `${schema}[*].url` },
    { test: `${schema}[*].reviewRating` },
    { test: `${schema}[*].claimReviewed` },
    // Warnings
    { test: `${schema}[*].author`, warning: true },
    { test: `${schema}[*].datePublished`, warning: true },
    { test: `${schema}[*].itemReviewed`, warning: true },
  ],
}

module.exports = {
  ClaimReview
}