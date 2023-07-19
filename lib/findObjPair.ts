/* eslint consistent-return: 0 */

import {curryN} from "ramda"

export const findObjPair = <T>(f: (v: T, k: string) => boolean, x: Record<string, T>) => {
  const entries = Object.entries(x)

  for (let i = 0; i < entries.length; i++) {
    const [k, v] = entries[i]

    if (f(v, k)) {
      return [k, v]
    }
  }

  return null
}

export default curryN(2, findObjPair)
