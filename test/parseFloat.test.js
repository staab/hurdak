import {assert} from "chai"
import {parseFloat} from "hurdak"

describe("parseFloat", () => {
  it("parses various things", () => {
    assert.equal(parseFloat(NaN), 0)
    assert.equal(parseFloat("stuff"), 0)
    assert.equal(parseFloat({}), 0)
    assert.equal(parseFloat(3), 3)
    assert.equal(parseFloat(5.8), 5.8)
    assert.equal(parseFloat("12.2"), 12.2)
    assert.equal(parseFloat("12.2.33"), 12.2)
    assert.equal(parseFloat("12.2  "), 12.2)
  })

  it("takes a fallback", () => {
    assert.equal(parseFloat(NaN, 1), 1)
  })
})
