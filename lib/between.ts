import {curryN} from "ramda"

export default curryN(3, (low, high, n) => n > low && n < high)
