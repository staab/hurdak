export default <T>(x: T | T[]) => (x instanceof Array ? x : [x])
