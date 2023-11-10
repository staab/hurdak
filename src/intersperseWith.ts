import {curryN} from "ramda"

export default curryN(2, <T>(f: (x: T, i: number) => T, xs: T[]) => {
  const init: T[] = []

  return xs.reduce((r, x, i) => (r.length ? r.concat([f(x, i), x]) : r.concat(x)), init)
})
