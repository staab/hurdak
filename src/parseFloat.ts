const DOT_REGEXP = new RegExp(/\.+/)

export default (x: string | number, fallback = 0) => {
  x = parseFloat(x.toString().replace(DOT_REGEXP, ".").trim())

  return isNaN(x) ? fallback : x
}
