import {assert} from "chai"
import {modifyValsRecursive} from "hurdak"

describe("modifyValsRecursive", () => {
  it("should modify Vals of an object recursively without modifying keys", () => {
    assert.deepEqual(
      modifyValsRecursive(
        (x) => x === 2,
        (x) => x + 1,
        {x: 1, y: {z: 2}, a: [1, 2, 3]}
      ),
      {x: 1, y: {z: 3}, a: [1, 3, 3]}
    )
  })
})
