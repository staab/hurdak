import {assert} from "chai"
import {anyProp} from "hurdak"

describe("anyProp", () => {
  it("Grabs the first value in an object", () => {
    assert.equal(anyProp({z: 1, a: 2}), 1)
  })
})
