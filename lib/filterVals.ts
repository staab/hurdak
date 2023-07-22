/* eslint @typescript-eslint/no-explicit-any: 0 */

import {curryN} from "ramda"

export default curryN(2, (f: (v: any) => boolean, x: Record<string, any>) => {
  const r = {} as Record<string, any>

  for (const k in x) {
    if (f(x[k])) {
      r[k] = x[k]
    }
  }

  return r
})
