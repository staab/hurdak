import {curryN} from "ramda"

export default curryN(2, <T>(f: (v: T, k: string) => void, x: Record<string, T>) =>
  Object.entries(x).forEach(([k, v]) => f(v, k))
)
