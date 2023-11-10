export default (x: string | number) =>
  String(x)
    .split("")
    .reverse()
    .reduce((acc, n, i) => n + (i && !(i % 3) ? "," : "") + acc)
    .replace("-,", "-")
