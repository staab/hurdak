import {curryN} from "ramda"
import {updatePath} from "./updatePath"

export default curryN(3, <T>(k: string, f: (x: T | undefined) => T, x: Record<string, T>) =>
  updatePath([k], f, x)
)
