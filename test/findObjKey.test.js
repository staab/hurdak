import {assert} from "chai"
import {findObjKey} from "hurdak"

describe("findObjKey", () => {
  it("should find the correct key in an object", () => {
    assert.equal(
      findObjKey((x) => x === 2, {a: 1, b: 2, c: 3}),
      "b"
    )
  })
})
