import pluralize from "./pluralize"
import commaFormat from "./commaFormat"

export default (n: number, label: string, pluralLabel?: string) =>
  `${commaFormat(n)} ${pluralize(n, label, pluralLabel)}`
