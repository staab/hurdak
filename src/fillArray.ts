import {map} from "ramda"

export default <T>(length: number, x: T) => map(() => x, new Array(length))
