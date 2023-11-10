import {path, assocPath, mergeRight} from "ramda"
import {curryN} from "ramda"

export default curryN(3, <T, S>(p: string[], v: Record<string, S>, x: Record<string, T>) =>
  assocPath(p, mergeRight(path(p, x) as Record<string, S>, v), x)
)
