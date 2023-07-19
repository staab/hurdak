import {assert} from "chai"
import {commaFormat} from "hurdak"

describe("commaFormat", () => {
  it("formats long numbers properly", () => {
    assert.equal(commaFormat(123456789), "123,456,789")
  })

  it("formats negative numbers properly", () => {
    assert.equal(commaFormat(-100200), "-100,200")
  })
})
