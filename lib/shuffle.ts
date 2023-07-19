import {sortBy} from "ramda"

export default sortBy(() => Math.random() > 0.5)
