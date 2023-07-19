import {assert} from "chai"
import {throttle} from "hurdak"

describe("throttle", () => {
  it("ignores calls that are too close together", (done) => {
    let i = 0

    const f = throttle(100, () => {
      i++
    })

    setTimeout(f, 50)
    setTimeout(f, 90)
    setTimeout(f, 150)
    setTimeout(f, 350)
    setTimeout(() => {
      assert.equal(i, 2)
      done()
    }, 500)
  })
})
