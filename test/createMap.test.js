import {assert} from "chai"
import {createMap} from "hurdak"

describe("createMap", () => {
  it("should create an index from a list", () => {
    assert.deepEqual(createMap("name", [{name: "a"}, {name: "b"}]), {
      a: {name: "a"},
      b: {name: "b"},
    })
  })
})
