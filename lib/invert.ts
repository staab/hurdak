export default <T>(outer: T[][]) => {
  const r = [] as T[][]

  outer.forEach((inner, i) =>
    inner.forEach((value, j) => {
      r[j] = r[j] || []
      r[j][i] = value
    })
  )

  return r
}
