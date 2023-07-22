/* eslint @typescript-eslint/no-explicit-any: 0 */

export default <T>(x: T, fs: Array<(v: any) => any>): any => fs.reduce((v, f) => f(v), x)
