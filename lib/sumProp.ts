import {curryN} from "ramda"

export default curryN(2, (k: string, xs: Record<string, number>[]) => {
  let r = 0

  for (let i = 0; i < xs.length; i += 1) {
    r += xs[i][k]
  }

  return r
})
