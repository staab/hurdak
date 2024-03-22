import {assert} from "chai"
import {quantify} from "hurdak"

describe("quantify", () => {
  it("pluralizes stuff", () => {
    assert.equal(quantify(1, "thing"), "1 thing")
    assert.equal(quantify(2, "thing"), "2 things")
    assert.equal(quantify(2, "thing", "babies"), "2 babies")
  })

  it("handles big numbers", () => {
    assert.equal(quantify(23984, "thing"), "23,984 things")
  })
})
