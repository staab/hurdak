import {assert} from "chai"
import {mergeRightPath} from "hurdak"

describe("mergeRightPath", () => {
  it("should do a shallow merge at a given path", () => {
    assert.deepEqual(
      mergeRightPath(["x", "y"], {z: {a: 1, b: 2}}, {x: {y: {z: {a: 2, c: 3}, w: 1}}}),
      {x: {y: {z: {a: 1, b: 2}, w: 1}}}
    )

    assert.deepEqual(mergeRightPath(["x"], {a: 1}, {x: {a: 2, c: 3}}), {x: {a: 1, c: 3}})
  })
})
