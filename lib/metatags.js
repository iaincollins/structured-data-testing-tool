const testForMetatags = ({ name, required, suggested }) => {
  if (!name) throw new Error("Test 'name' is required")
  const tests = []
  if (required) {
    required.forEach(tag => {
      tests.push({ test: `"${tag}"`, expect: true, schema: name, type: 'metatag' })
    })
  }
  if (suggested) {
    suggested.forEach(tag => {
      tests.push({ test: `"${tag}"`, expect: true, schema: name, type: 'metatag', warning: true })
    })
  }
  return {
    tests
  }
}

module.exports = {
  testForMetatags
}