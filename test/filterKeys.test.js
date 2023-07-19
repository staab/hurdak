import {assert} from "chai"
import {filterKeys} from "hurdak"

describe("filterKeys", () => {
  it("keeps values that match", () => {
    assert.deepEqual(
      filterKeys((x) => x === "y", {x: 1, y: 2, z: 3}),
      {y: 2}
    )
  })
})
