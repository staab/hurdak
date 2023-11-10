import {map} from "ramda"

// Use ramda's map since array initialization is squirrely
export default <T>(length: number, x: () => T) => map(x, new Array(length))
