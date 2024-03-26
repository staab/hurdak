export default <T>(chunkLength: number, coll: T[]) => {
  const result: T[][] = []
  const current: T[] = []

  coll.forEach((item: T) => {
    if (current.length < chunkLength) {
      current.push(item)
    } else {
      result.push(current.splice(0))
    }
  })

  if (current.length > 0) {
    result.push(current)
  }

  return result
}
