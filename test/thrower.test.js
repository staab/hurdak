import {assert} from "chai"
import {thrower} from "hurdak"

describe("thrower", () => {
  it("throws stuff", () => {
    assert.throws(thrower("hi"), "hi")
  })
})
