import {curryN} from "ramda"
import mergeLeftPath from "./mergeLeftPath"

export default curryN(3, <T, S>(k: string, v: Record<string, S>, x: Record<string, T>) =>
  mergeLeftPath([k], v, x)
)
