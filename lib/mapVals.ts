import {identity} from "ramda"
import {curryN} from "ramda"
import {mapObj} from "./mapObj"

export default curryN(2, <T>(f: (x: T) => T, x: Record<string, T>) => mapObj(identity, f, x))
