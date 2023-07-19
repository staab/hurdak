export default <T>(f: (v: T) => void) =>
  (v: T) => {
    f(v)

    return v
  }
