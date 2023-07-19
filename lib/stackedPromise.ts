export default <T>() => {
  // Stack promises to avoid race conditions
  let latest: Promise<T>

  return function track(x: Promise<T>): Promise<T> {
    // Wrap our value in a promise just in case
    const cur = Promise.resolve(x)

    // Update our latest promise
    latest = cur

    // Detect whether track got called again by comparing cur
    // against latest. If cur is obsolete, return latest instead.
    const guard =
      (cb: (x: T) => Promise<T>) =>
      (result: T): Promise<T> =>
        cur === latest ? cb(result) : track(latest)

    return Promise.resolve(cur).then(
      guard((v: T) => Promise.resolve(v)),
      guard((v: T) => Promise.reject(v))
    )
  }
}
