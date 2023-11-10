import parseFloat from "./parseFloat"
import commaFormat from "./commaFormat"

let symbol = "$"

export const getSymbol = () => symbol

export const setSymbol = (s: string) => {
  symbol = s
}

export const formatNumeric = (x: number) => {
  const [dollars, cents] = parseFloat(x / 100)
    .toFixed(2)
    .split(".")

  return [commaFormat(dollars), cents].join(".")
}

export const parseNumeric = (display: string) =>
  Math.round(parseFloat(display.replace(/,/g, "")) * 100)

export const format = (cents: number) =>
  cents >= 0 ? `${symbol}${formatNumeric(cents)}` : `-${symbol}${formatNumeric(Math.abs(cents))}`

export const parse = (display: string) => parseNumeric(display.replace(symbol, ""))

export const formatRounded = (cents: number) => format(cents).slice(0, -3)

export const parseRounded = (display: string) => parse(`${display}.00`)

export const formatK = (cents: number) => {
  if (cents < 1000000) {
    return formatRounded(cents)
  }

  const k = formatRounded(cents / 1000)
  const h = Math.floor((cents % 100000) / 10000)

  return h ? `${k}.${h}k` : `${k}k`
}
