export default <T>(x: Record<string, T>) => x[Object.keys(x)[0]]
