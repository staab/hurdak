import {assert} from "chai"
import {noop} from "hurdak"

describe("noop", () => {
  it("should do nothing and return nothing", () => {
    assert.equal(noop("stuff"), undefined)
  })
})
