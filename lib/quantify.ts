import pluralize from "./pluralize"

export default (n: number, label: string, pluralLabel?: string) =>
  `${n} ${pluralize(n, label, pluralLabel)}`
