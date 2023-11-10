import {curryN} from "ramda"

export default curryN(3, (fromKey, toKey, obj) => ({...obj, [toKey]: obj[fromKey]}))
