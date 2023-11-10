export default function* chain<T>(...generators: Iterable<T>[]) {
  for (const g of generators) {
    yield* g
  }
}
