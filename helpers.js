const testForMetatags = ({ name, required, suggested }) => {
  const tests = []
  required.forEach(tag => {
    tests.push({ test: `"${tag}"`, expect: true, schema: name, type: 'metatags' })
  })
  if (suggested) {
    suggested.forEach(tag => {
      tests.push({ test: `"${tag}"`, expect: true, schema: name, type: 'metatags', warning: true })
    })
  }
  return {
    tests
  }
}

module.exports = {
  testForMetatags
}