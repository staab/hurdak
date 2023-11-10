export default (a: number, b: number, step = 1) => {
  const r: number[] = []

  for (let i = a; i < b; i += step) {
    r.push(i)
  }

  return r
}
