import toPascal from './toPascal'

export default (x: string) => {
  const [first, ...rest] = toPascal(x)

  return (first || '').toLowerCase() + rest.join('')
}
