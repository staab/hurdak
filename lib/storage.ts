/* eslint @typescript-eslint/no-explicit-any: 0 */

const fake = {} as Record<string, string>

type ClearOpts = {
  keep?: string[]
  only?: string[]
}

type Storage = {
  setItem: (k: string, v: string) => void
  getItem: (k: string) => string | null
  removeItem: (k: string) => void
}

let isFake = false
let storage: Storage
try {
  storage = localStorage as Storage
} catch (e) {
  isFake = true
  storage = {
    getItem: (k: string) => fake[k] || null,
    setItem: (k: string, v: string) => {
      fake[k] = v
    },
    removeItem: (k: string) => {
      delete fake[k]
    },
  }
}

export const clear = ({keep, only}: ClearOpts = {}) => {
  if (keep && only) {
    throw new Error("keep and only are mutually exclusive")
  }

  for (const k in isFake ? fake : storage) {
    if (keep && !keep.includes(k)) {
      storage.removeItem(k)
    }

    if (only && only.includes(k)) {
      storage.removeItem(k)
    }

    if (!keep && !only) {
      storage.removeItem(k)
    }
  }
}

export const setItem = (k: string, v: string) => storage.setItem(k, v)
export const hasItem = (k: string) => Object.hasOwn(storage, k) || Object.hasOwn(fake, k)
export const getItem = (k: string) => storage.getItem(k)
export const setJson = (k: string, v: any) => setItem(k, JSON.stringify(v))

export const getJson = (k: string) => {
  const v = getItem(k)

  return v === null ? v : JSON.parse(v)
}

export const keys = () => Object.keys(isFake ? fake : storage)

export const cursor = (key: string, initialState = null) => {
  if (!hasItem(key)) {
    setJson(key, initialState)
  }

  return {
    key,
    initialState,
    set: (v: any) => setJson(key, v),
    get: () => getJson(key),
  }
}
