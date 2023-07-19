import {assert} from "chai"
import {fillArray} from "hurdak"

describe("fillArray", () => {
  it("should populate array with given length using given value", () => {
    assert.deepEqual(fillArray(3, 1), [1, 1, 1])
  })
})
