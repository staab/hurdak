export default (m: string) => () => {
  throw new Error(m)
}
