/* eslint @typescript-eslint/no-explicit-any: 0 */

export default (k: string, m: Record<string, any>) => m[k] || m.default
