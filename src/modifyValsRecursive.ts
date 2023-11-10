/* eslint @typescript-eslint/no-explicit-any: 0 */

import {curryN} from "ramda"
import isPojo from "./isPojo"
import mapVals from "./mapVals"

type MatchFn = (x: unknown) => boolean
type ModifyFn = <T>(x: unknown) => T
type RecursiveModifier = (match: MatchFn, modify: ModifyFn, x: any) => any

const modifyValsRecursive: RecursiveModifier = (match, modify, x) => {
  if (match(x)) {
    return modify(x)
  }

  if (Array.isArray(x)) {
    return x.map((item) => modifyValsRecursive(match, modify, item))
  }

  // Only recur into pojos
  if (isPojo(x)) {
    return mapVals((v) => modifyValsRecursive(match, modify, v), x)
  }

  return x
}

export default curryN(3, modifyValsRecursive)
