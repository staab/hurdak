/* eslint @typescript-eslint/no-explicit-any: 0 */

import {omit} from "ramda"
import {curryN} from "ramda"

export default curryN(3, (a: string, b: string, x: Record<string, any>) => ({
  ...omit([a], x),
  [b]: x[a],
}))
