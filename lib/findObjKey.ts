import {curryN} from "ramda"
import {findObjPair} from "./findObjPair"

export default curryN(2, <T>(f: (v: T, k: string) => boolean, x: Record<string, T>) => {
  const pair = findObjPair<T>(f, x)

  return pair?.[0]
})
