import {assert} from "chai"
import {hash} from "hurdak"

describe("hash", () => {
  it("hashes stuff", () => {
    assert.equal(hash("bananas"), 337338962)
  })
})
