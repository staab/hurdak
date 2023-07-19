import {curryN} from "ramda"

export default curryN(
  2,
  (precision: number, x: number) =>
    Math.round(x * Math.pow(10, precision)) / Math.pow(10, precision)
)
