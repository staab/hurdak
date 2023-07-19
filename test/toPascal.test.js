import {assert} from "chai"
import {toPascal} from "hurdak"

describe("toPascal", () => {
  it("should handle abominations of all sorts", () => {
    assert.equal(toPascal("DEEF__ huur dee_dumP"), "DeefHuurDeeDump")
    assert.equal(toPascal(""), "")
  })
})
