import {assert} from "chai"
import {summarize, Schema as S} from "hurdak"

const pass = (schema, value) => assert.equal(null, S.getError(schema, value))

const fail = (code, schema, value) => {
  const err = S.getError(schema, value)

  assert.ok(err, `No error returned for "${summarize(schema)}" and "${summarize(value)}"`)

  assert.equal(code, err.code)
}

describe("Schema", () => {
  it("gets paths right", () => {
    const {path} = S.getError([[{x: S.Int}]], [[{x: 1}, {x: "x"}]])

    assert.deepEqual([0, 1, "x"], path)
  })

  it("rejects primitives", () => {
    assert.throws(() => S.getError(Number, 1))
  })

  it("validates int", () => {
    fail(S.TYPE_ERROR, S.Int, "x")
    fail(S.TYPE_ERROR, S.Int, 1.2)
    pass(S.Int, 1)
  })

  it("validates num", () => {
    fail(S.TYPE_ERROR, S.Num, "x")
    pass(S.Num, 1.2)
    pass(S.Num, 1)
  })

  it("validates str", () => {
    pass(S.Str, "x")
    fail(S.TYPE_ERROR, S.Str, 1.2)
    fail(S.TYPE_ERROR, S.Str, 1)
    fail(S.TYPE_ERROR, S.Str, null)
  })

  it("validates requiredKeys", () => {
    const schema = S.obj({x: S.Int}, {requiredKeys: ["x"]})

    fail(S.MISSING_KEY, schema, {})
  })

  it("validates requiredValues", () => {
    const schema = S.obj({x: S.Int}, {requiredValues: ["x"]})

    fail(S.MISSING_VALUE, schema, {})
    fail(S.MISSING_VALUE, schema, {x: null})
  })
})
