import {assert} from "chai"
import {mergeLeftPath} from "hurdak"

describe("mergeLeftPath", () => {
  it("should do a shallow merge at a given path", () => {
    assert.deepEqual(
      mergeLeftPath(["x", "y"], {z: {a: 1, b: 2}}, {x: {y: {z: {a: 2, c: 3}, w: 1}}}),
      {x: {y: {z: {a: 2, c: 3}, w: 1}}}
    )

    assert.deepEqual(mergeLeftPath(["x"], {a: 1, b: 5}, {x: {a: 2, c: 3}}), {x: {a: 2, b: 5, c: 3}})
  })
})
