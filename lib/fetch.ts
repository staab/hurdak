type FetchOpts = {
  method?: string
  headers?: Record<string, string | boolean>
  body?: string | FormData
}

export const fetchJson = async (url: string, opts: FetchOpts = {}) => {
  if (!opts.headers) {
    opts.headers = {}
  }

  opts.headers["Accept"] = "application/json"

  const res = await fetch(url, opts as RequestInit)
  const json = await res.json()

  return json
}

export const postJson = async <T>(url: string, data: T, opts: FetchOpts = {}) => {
  if (!opts.method) {
    opts.method = "POST"
  }

  if (!opts.headers) {
    opts.headers = {}
  }

  opts.headers["Content-Type"] = "application/json"
  opts.body = JSON.stringify(data)

  return fetchJson(url, opts)
}

export const uploadFile = (url: string, fileObj: File) => {
  const body = new FormData()

  body.append("file", fileObj)

  return fetchJson(url, {method: "POST", body})
}
