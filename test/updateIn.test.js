import {assert} from "chai"
import {updateIn} from "hurdak"

describe("updateIn", () => {
  const obj = {x: {y: {z: 1}}, y: {z: 2}, z: 3}

  it("should provide value as context", () => {
    updateIn("z", (value) => assert.equal(value, 3), obj)
  })

  it("should set returned value to the object at the given key", () => {
    assert.deepEqual(
      updateIn("z", () => 4, obj),
      {...obj, z: 4}
    )
  })
})
