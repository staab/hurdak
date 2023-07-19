import {assert} from "chai"
import {mergeRightIn} from "hurdak"

describe("mergeRightIn", () => {
  it("should do a shallow merge at the given key", () => {
    assert.deepEqual(mergeRightIn("x", {a: 1}, {x: {a: 2, c: 3}}), {x: {a: 1, c: 3}})
  })
})
