export default () => {
  let resolve, reject
  const p = new Promise((resolve_, reject_) => {
    resolve = resolve_
    reject = reject_
  })

  return Object.assign(p, {resolve, reject})
}
