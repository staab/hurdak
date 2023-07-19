import {assert} from "chai"
import {sumProp} from "hurdak"

describe("sumProp", () => {
  it("should sum prop properly", () => {
    assert.deepEqual(sumProp("x", [{x: 1}, {x: 5}, {x: -3}]), 3)
  })
})
