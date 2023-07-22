import {sortBy} from "ramda"

export default <T>(xs: T[]): T[] => sortBy(() => Math.random() > 0.5, xs)
