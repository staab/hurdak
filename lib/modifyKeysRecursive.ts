/* eslint @typescript-eslint/no-explicit-any: 0 */

import {curryN} from "ramda"
import isPojo from "./isPojo"
import mapObj from "./mapObj"

function modifyKeysRecursive<T>(f: (x: string) => string, x: T): T
function modifyKeysRecursive(f: (x: string) => string, x: any[]): any[]
function modifyKeysRecursive(f: (x: string) => string, x: any): any {
  if (Array.isArray(x)) {
    return x.map((v) => modifyKeysRecursive(f, v))
  }

  if (isPojo(x)) {
    return mapObj(f, (v) => modifyKeysRecursive(f, v), x)
  }

  return x
}

export default curryN(2, modifyKeysRecursive)
