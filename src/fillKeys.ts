import {clone} from "ramda"
import {curryN} from "ramda"

export default curryN(2, <T>(ks: string[], x: T) => {
  const r = {} as Record<string, T>

  for (let i = 0; i < ks.length; i++) {
    r[ks[i]] = clone(x)
  }

  return r
})
