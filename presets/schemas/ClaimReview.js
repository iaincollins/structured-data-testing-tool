const ClaimReview = {
  tests: [
    // Expected by Google
    { test: `ClaimReview`, expect: true, schema: 'ClaimReview' },
    { test: `ClaimReview[*]."@type"`, expect: 'ClaimReview', schema: 'ClaimReview' },
    { test: `ClaimReview[*].url`, expect: true, schema: 'ClaimReview' },
    { test: `ClaimReview[*].reviewRating`, expect: true, schema: 'ClaimReview' },
    { test: `ClaimReview[*].claimReviewed`, expect: true, schema: 'ClaimReview' },
    // Warnings
    { test: `ClaimReview[*].author`, expect: true, schema: 'ClaimReview', warning: true },
    { test: `ClaimReview[*].datePublished`, expect: true, schema: 'ClaimReview', warning: true },
    { test: `ClaimReview[*].itemReviewed`, expect: true, schema: 'ClaimReview', warning: true },
  ],
  description: 'A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).'
}

module.exports = {
  ClaimReview
}