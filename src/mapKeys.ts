import {identity} from "ramda"
import {curryN} from "ramda"
import mapObj from "./mapObj"

export default curryN(2, <T>(f: (k: string) => string, x: Record<string, T>) =>
  mapObj(f, identity, x)
)
