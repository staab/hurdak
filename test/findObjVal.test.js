import {assert} from "chai"
import {findObjVal} from "hurdak"

describe("findObjVal", () => {
  it("should find the correct value in an object", () => {
    assert.equal(
      findObjVal((x) => x === 2, {a: 1, b: 2, c: 3}),
      2
    )
  })
})
