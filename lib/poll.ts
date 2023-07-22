export default <T>(t = 100, f: () => T) =>
  new Promise((resolve) => {
    ;(function tryIt() {
      const r = f()

      if (r) {
        resolve(r)
      } else {
        setTimeout(tryIt, t)
      }
    })()
  })
