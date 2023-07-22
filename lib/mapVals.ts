/* eslint @typescript-eslint/no-explicit-any: 0 */

import {identity} from "ramda"
import {curryN} from "ramda"
import {mapObj} from "./mapObj"

export default curryN(2, (f: (x: any) => any, x: Record<string, any>) => mapObj(identity, f, x))
