import {prop} from "ramda"

export default <T>(x: T) => prop("constructor", x) === Object
