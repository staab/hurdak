import {keys} from "ramda"

export default (x: Record<string, unknown>) => keys(x).length
