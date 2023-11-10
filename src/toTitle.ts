import toSnake from './toSnake'

export default (x: string) =>
  toSnake(x).split('_').map(([a, ...w]) => [(a || '').toUpperCase(), ...w].join('')).join(' ')
