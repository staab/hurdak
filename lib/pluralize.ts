export default (n: number, label: string, pluralLabel?: string) =>
  n === 1 ? label : pluralLabel || `${label}s`
