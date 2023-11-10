import {curryN} from "ramda"

export const mapObj = <T>(kf: (k: string) => string, vf: (v: T) => T, x: Record<string, T>) => {
  const r = {} as Record<string, T>

  for (const k in x) {
    r[kf(k)] = vf(x[k])
  }

  return r
}

export default curryN(3, mapObj)
