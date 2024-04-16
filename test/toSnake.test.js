import {assert} from "chai"
import {toSnake} from "hurdak"

describe("toSnake", () => {
  it("should handle abominations of all sorts", () => {
    assert.equal(toSnake("DEEF__ huur dee-dumP"), "deef_huur_dee_dump")
    assert.equal(toSnake("30f"), "30f")
    assert.equal(toSnake("30F"), "30f")
    assert.equal(toSnake("SymDiff"), "sym_diff")
  })
})
