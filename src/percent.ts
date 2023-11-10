import {pipe} from "ramda"
import round from "./round"
import parseFloat from "./parseFloat"

type Opts = {
  precision?: number
}

const million = Math.pow(10, 10)

export const formatNumeric = (n: number, {precision}: Opts = {}) => {
  // Fix floating point weirdness: .07 * 100 === 7.000000000000001
  n = Math.round(n * 100 * million) / million

  return String(precision === undefined ? n : parseFloat(n.toFixed(precision)))
}

export const parseNumeric = (display: string, {precision}: Opts = {}) => {
  const result = parseFloat(display) / 100

  return precision === undefined ? result : round(precision, result)
}

export const format = pipe(formatNumeric, (value) => `${value}%`)

export const parse = (value: string, opts: Opts) => parseNumeric(value.replace("%", ""), opts)
