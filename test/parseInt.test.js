import {assert} from "chai"
import {parseInt} from "hurdak"

describe("parseInt", () => {
  it("parses various things", () => {
    assert.equal(parseInt(NaN), 0)
    assert.equal(parseInt("stuff"), 0)
    assert.equal(parseInt({}), 0)
    assert.equal(parseInt(3), 3)
    assert.equal(parseInt(5.8), 5)
  })

  it("takes a fallback", () => {
    assert.equal(parseInt(NaN, 1), 1)
  })
})
