/* eslint @typescript-eslint/no-explicit-any: 0 */

import {is} from "ramda"

export default function tryFunc<T>(
  f: () => T | void,
  onError: (e?: any) => void = (_) => {}
): Promise<T | null> | T | null {
  try {
    const r = f()

    if (is(Promise, r)) {
      return r.catch((e) => {
        onError(e)

        return null
      }) as Promise<T | null>
    } else {
      return r as T
    }
  } catch (e) {
    onError(e)
  }

  return null
}
