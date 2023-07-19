import {is} from "ramda"

export default (f: <T>() => T, onError = (_: unknown) => null) => {
  try {
    const r = f()

    if (is(Promise, r)) {
      return r.catch(onError)
    } else {
      return r
    }
  } catch (e) {
    onError(e)
  }

  return null
}
