import {curryN} from "ramda"

export default curryN(2, <T>(f: (v: T) => boolean, x: Record<string, T>) => {
  const r = {} as Record<string, T>

  for (const k in x) {
    if (f(x[k])) {
      r[k] = x[k]
    }
  }

  return r
})
