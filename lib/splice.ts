import {curryN} from "ramda"

export default curryN(3, <T>(i: number, n: number, v: T[]) => v.slice(0, i).concat(v.slice(i + n)))
