export default <T>(ks: string[], ...a: T[]) => (...b: T[]) => {
  const combined = a.concat(b)

  return Object.fromEntries(ks.map((k, i) => [k, combined[i]]))
}
