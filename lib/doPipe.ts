export default <T>(x: T, fs: Array<(v: T) => T>) => fs.reduce((v, f) => f(v), x)
