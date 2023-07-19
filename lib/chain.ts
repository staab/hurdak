export default function* chain<T>(...generators: IterableIterator<T>[]) {
  for (const g of generators) {
    yield* g
  }
}
