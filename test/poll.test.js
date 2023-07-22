import {assert} from "chai"
import {poll} from "hurdak"

describe("poll", () => {
  it("should resolve when the condition changes", (done) => {
    let condition = false
    let success = false

    poll(5, () => condition).then(() => {
      success = true
    })

    setTimeout(() => {
      condition = true
    }, 10)

    setTimeout(() => {
      assert.isTrue(success)

      done()
    }, 15)
  })
})
