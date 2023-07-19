import {curryN} from "ramda"
import mergeRightPath from "./mergeRightPath"

export default curryN(3, <T, S>(k: string, v: Record<string, S>, x: Record<string, T>) =>
  mergeRightPath([k], v, x)
)
