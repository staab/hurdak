import {path, assocPath} from "ramda"
import {curryN} from "ramda"

export const updatePath = <T, U>(p: string[], f: (value: U | undefined) => U, x: T): T => {
  const valueAtPath: U | undefined = path(p, x)

  return assocPath(p, f(valueAtPath), x)
}

export default curryN(3, updatePath)
