import toSnake from './toSnake'

export default (x: string) => toSnake(x).replace(/_/g, '-')
