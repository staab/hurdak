/* eslint @typescript-eslint/no-explicit-any: 0 */

import {curryN} from "ramda"

export default curryN(3, (k: string, vk: string, xs: Record<string, any>[]) => {
  const r = {} as Record<string, any>

  for (let i = 0; i < xs.length; i++) {
    r[xs[i][k]] = xs[i][vk]
  }

  return r
})
