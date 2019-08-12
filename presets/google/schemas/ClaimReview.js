const ClaimReview = {
  name: 'ClaimReview',
  description: 'A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).',
  schema: 'ClaimReview',
  conditional: {
    test: 'ClaimReview'
  },
  tests: [
    // Expected by Google
    { test: `ClaimReview` },
    { test: `ClaimReview[*]."@type"`, expect: 'ClaimReview' },
    { test: `ClaimReview[*].url` },
    { test: `ClaimReview[*].reviewRating` },
    { test: `ClaimReview[*].claimReviewed` },
    // Warnings
    { test: `ClaimReview[*].author`, warning: true },
    { test: `ClaimReview[*].datePublished`, warning: true },
    { test: `ClaimReview[*].itemReviewed`, warning: true },
  ],
}

module.exports = {
  ClaimReview
}