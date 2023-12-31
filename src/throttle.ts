/* eslint @typescript-eslint/no-explicit-any: 0 */

export default <Args extends any[]>(t: number, f: (...args: Args) => void) => {
  let args: Args
  let timeout: number | NodeJS.Timeout | null

  return (...thisArgs: Args) => {
    args = thisArgs

    if (!timeout) {
      timeout = setTimeout(async () => {
        await f(...args)
        timeout = null
      }, t)
    }
  }
}
