const { testForMetatags } = require('../helpers')

describe('helper functions', () => {
  test('should throw exception if name argument not supplied', () => {
    let exceptionThrown = false
    try {
      testForMetatags({})
    } catch (e) {
      exceptionThrown = true
    }
    expect(exceptionThrown).toBeTruthy()
  })

  test('should use name option as test schema in tests', () => {
    const result = testForMetatags({
      name: 'TestTag',
      required: [
        'required-meta-tag'
      ]
    })
    expect(result.tests[0].schema).toEqual('TestTag')
  })

  test('should accept required metatags', () => {
    const result = testForMetatags({
      name: 'TestTag',
      required: [
        'required-meta-tag'
      ]
    })
    expect(result.tests.length).toEqual(1)
    expect(result.tests[0].test).toEqual('"required-meta-tag"')
    expect(result.tests[0].expect).toBeTruthy()
    expect(result.tests[0].schema).toEqual('TestTag')
    expect(result.tests[0].type).toEqual('metatags')
    expect(result.tests[0].warning).toBeFalsy()
  })

  test('should accept suggested metatags', () => {
    const result = testForMetatags({
      name: 'TestTag',
      suggested: [
        'suggested-meta-tag'
      ]
    })
    expect(result.tests.length).toEqual(1)
    expect(result.tests[0].test).toEqual('"suggested-meta-tag"')
    expect(result.tests[0].expect).toBeTruthy()
    expect(result.tests[0].schema).toEqual('TestTag')
    expect(result.tests[0].type).toEqual('metatags')
    expect(result.tests[0].warning).toBeTruthy()
  })

  test('should accept both required and suggested metatags', () => {
    const result = testForMetatags({
      name: 'TestTag',
      required: [
        'required-meta-tag'
      ],
      suggested: [
        'suggested-meta-tag'
      ]
    })

    expect(result.tests.length).toEqual(2)

    expect(result.tests[0].test).toEqual('"required-meta-tag"')
    expect(result.tests[0].expect).toBeTruthy()
    expect(result.tests[0].schema).toEqual('TestTag')
    expect(result.tests[0].type).toEqual('metatags')
    expect(result.tests[0].warning).toBeFalsy()

    expect(result.tests[1].test).toEqual('"suggested-meta-tag"')
    expect(result.tests[1].expect).toBeTruthy()
    expect(result.tests[1].schema).toEqual('TestTag')
    expect(result.tests[1].type).toEqual('metatags')
    expect(result.tests[1].warning).toBeTruthy()
  })
})
