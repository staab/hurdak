import {curryN} from "ramda"

export default curryN(2, <T>(f: (x: T) => T, xs: T[]) => xs.flatMap(f))
