import {assert} from "chai"
import {switcher} from "hurdak"

describe("switcher", () => {
  it("selects the correct option", () => {
    assert.equal(switcher("a", {a: 1}), 1)
    assert.equal(switcher("a", {b: 1, default: 2}), 2)
  })

  it("handles falsy values", () => {
    assert.equal(switcher("b", {b: 0, default: 2}), 0)
  })
})
