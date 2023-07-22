/* eslint @typescript-eslint/no-explicit-any: 0 */

export default <T>() => {
  let resolve: (value?: T | PromiseLike<T>) => void
  let reject: (reason?: any) => void

  const promise: Promise<T> = new Promise<T>((res, rej) => {
    resolve = res as typeof resolve
    reject = rej
  })

  return Object.assign(promise, {
    resolve: resolve!,
    reject: reject!,
  })
}
