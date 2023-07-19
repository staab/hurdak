import {assert} from "chai"
import {pickVals} from "hurdak"

describe("pickVals", () => {
  it("should return the selected values in the given order", () => {
    assert.deepEqual(pickVals(["a", "c"], {a: 1, b: 2, c: 3}), [1, 3])
  })
})
