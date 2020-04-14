function getTestsFromPreset(preset, structuredData, testGroup) {
  const tests = []

  if (!preset.tests)
    return tests

  const _setTestGroup = (test, preset) => {
    // If test does not explicitly have a group defined, use the the default one preset,
    // if defined. If no default group is is defined for the preset, fallback to using
    // the preset name to group the results (every preset SHOULD have a name!)
    if (!test.group) {
      if (preset.group) {
        test.group = preset.group
      } else if (preset.name) {
        test.group = preset.name
      } else {
        test.group = 'DEFAULT'
      }
    }
  }

  if (preset.schema) {
    // If preset has a schema, return tests that check every instance of that schema
    Object.keys(structuredData).map(dataType => {
      if (dataType === 'metatags')
        return
      Object.keys(structuredData[dataType]).map((schemaName) => {
        if (schemaName === preset.schema) {
          structuredData[dataType][schemaName].forEach((instance, i) => {
            const groups = testGroup.concat(`#${i} (${dataType})`)

            preset.tests.forEach(t => {
              // Note: Must copy object so we can re-use tests objects from a preset in different tests
              const test = Object.assign({}, t)
              test.schema = preset.schema
              test.test = test.test.replace(/(.*)?\[\*\]/, `${preset.schema}[${i}]`)
              test.type = dataType
              test.groups = groups
              if (!test.description)
                test.description = test.test.replace(/(.*)?\[\d\]\./, '').replace(/"/g, '')

              // If the test doesn't have an explict URL assigned to it but the preset does
              // then assign the URL on the preset (which should point to documentation for
              // preset) to the test, so it is easily acessible when displaying results.
              if (!test.url && preset.url)
                test.url = preset.url

              tests.push(test)
            })
          })
        }
      })
    })
  } else {
    // If preset does not have a schema, then return only the tests in the preset
    preset.tests.forEach(test => {
      _setTestGroup(test, preset)
      // If the test doesn't have an explict URL assigned to it but the preset does
      // then assign the URL on the preset (which should point to documentation for
      // preset) to the test, so it is easily acessible when displaying results.
      if (!test.url && preset.url)
        test.url = preset.url
      tests.push(test)
    })
  }

  return tests
}

module.exports = {
  getTestsFromPreset
}