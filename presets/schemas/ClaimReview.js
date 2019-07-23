const ClaimReview = {
  name: 'BlogPosting',
  description: 'A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).',
  schema: 'ClaimReview',
  group: 'ClaimReview',
  tests: [
    // Expected by Google
    { test: `ClaimReview`, expect: true },
    { test: `ClaimReview[*]."@type"`, expect: 'ClaimReview' },
    { test: `ClaimReview[*].url`, expect: true },
    { test: `ClaimReview[*].reviewRating`, expect: true },
    { test: `ClaimReview[*].claimReviewed`, expect: true },
    // Warnings
    { test: `ClaimReview[*].author`, expect: true, warning: true },
    { test: `ClaimReview[*].datePublished`, expect: true, warning: true },
    { test: `ClaimReview[*].itemReviewed`, expect: true, warning: true },
  ],
}

module.exports = {
  ClaimReview
}