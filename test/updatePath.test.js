import {assert} from "chai"
import {updatePath} from "hurdak"

describe("updatePath", () => {
  const obj = {x: {y: {z: 1}}, y: {z: 2}, z: 3}

  it("should provide value as context", () => {
    updatePath(["x", "y", "z"], (value) => assert.equal(value, 1), obj)
  })

  it("should set returned value to the object at a given path of any length", () => {
    assert.equal(
      updatePath([], () => 2, obj),
      2
    )
    assert.deepEqual(
      updatePath(["x"], () => 2, obj),
      {x: 2, y: {z: 2}, z: 3}
    )
    assert.deepEqual(
      updatePath(["x", "y"], () => 2, obj),
      {x: {y: 2}, y: {z: 2}, z: 3}
    )
    assert.deepEqual(
      updatePath(["x", "y", "z"], () => 2, obj),
      {x: {y: {z: 2}}, y: {z: 2}, z: 3}
    )
  })
})
