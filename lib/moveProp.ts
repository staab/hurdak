import {omit} from "ramda"
import {curryN} from "ramda"
import copyProp from "./copyProp"

export default curryN(3, <T>(fromKey: string, toKey: string, obj: Record<string, T>) =>
  omit([fromKey], copyProp(fromKey, toKey, obj))
)
