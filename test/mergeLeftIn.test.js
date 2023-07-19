import {assert} from "chai"
import {mergeLeftIn} from "hurdak"

describe("mergeLeftIn", () => {
  it("should do a shallow merge at the given key", () => {
    assert.deepEqual(mergeLeftIn("x", {a: 1, b: 5}, {x: {a: 2, c: 3}}), {x: {a: 2, b: 5, c: 3}})
  })
})
