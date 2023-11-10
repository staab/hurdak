export default (x: string) =>
  x
    .replace(/[-_ ]+/g, "_")
    .replace(/(^_)_*([A-Z][a-z]+)/g, "$1_$2")
    .replace(/\.([A-Z])/g, "_$1")
    .toLowerCase()
