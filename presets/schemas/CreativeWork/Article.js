// There are multiple types of Article but they are identical in terms of core fields
const _articlePrototype = (schema) => {
  return {
    name: schema,
    schema,
    tests: [
      // Expected by Google
      { test: `${schema}` },
      { test: `${schema}[*]."@type"`, expect: schema },
      { test: `${schema}[*].author` },
      { test: `${schema}[*].datePublished` },
      { test: `${schema}[*].headline` },
      { test: `${schema}[*].image` },
      { test: `${schema}[*].publisher."@type"` },
      { test: `${schema}[*].publisher.name` },
      { test: `${schema}[*].publisher.logo` },
      { test: `${schema}[*].publisher.logo.url` },
      // Warnings from Google
      { test: `${schema}[*].dateModified`, warning: true },
      { test: `${schema}[*].mainEntityOfPage`, warning: true },
    ]
  }
}

// Several article types have identical, minimal requirements
const _simpleArticlePrototype = (schema) => {
  return {
    name: schema,
    schema,
    tests: [
      // Expected by Google
      { test: `${schema}` },
      { test: `${schema}[*]."@type"`, expect: schema },
      // Warnings from Google
      { test: `${schema}[*].headline`, warning: true },
      { test: `${schema}[*].image`, warning: true },
    ]
  }
}
const Article = {
  ..._articlePrototype('Article'),
  description: 'An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.'
}

module.exports = {
  _articlePrototype,
  _simpleArticlePrototype,
  Article
}