import {curryN} from "ramda"

export default curryN(2, <T>(chunkLength: number, coll: T[]) => {
  const result: T[][] = []
  let current: T[] = []

  coll.forEach((item: T) => {
    if (current.length < chunkLength) {
      current.push(item)
    }

    if (current.length === chunkLength) {
      result.push(current)
      current = []
    }
  })

  if (current.length > 0) {
    result.push(current)
  }

  return result
})
