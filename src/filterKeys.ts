import {curryN} from "ramda"

export default curryN(2, <T>(f: (k: string) => boolean, x: Record<string, T>) => {
  const r = {} as Record<string, T>

  for (const k in x) {
    if (f(k)) {
      r[k] = x[k]
    }
  }

  return r
})
