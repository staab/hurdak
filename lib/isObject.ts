import {is} from "ramda"

export default <T>(x: T) => is(Object, x) && !is(Array, x)
