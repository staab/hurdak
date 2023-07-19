/* eslint @typescript-eslint/no-explicit-any: 0 */

import switcher from "./switcher"

export default (k: string, m: Record<string, () => any>) => switcher(k, m)()
