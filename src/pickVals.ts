import {curryN} from "ramda"

export default curryN(2, <T>(ks: string[], x: Record<string, T>) => ks.map((k) => x[k]))
