/* eslint @typescript-eslint/no-explicit-any: 0 */

import {curryN} from "ramda"

export default curryN(2, (k, xs) => {
  const r = {} as Record<string, any>

  for (let i = 0; i < xs.length; i++) {
    r[xs[i][k]] = xs[i]
  }

  return r
})
