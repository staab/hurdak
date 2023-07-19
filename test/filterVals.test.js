import {assert} from "chai"
import {filterVals} from "hurdak"

describe("filterVals", () => {
  it("keeps values that match", () => {
    assert.deepEqual(
      filterVals((x) => x > 2, {x: 1, y: 2, z: 3}),
      {z: 3}
    )
  })
})
