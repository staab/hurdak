export default <T>(...sets: Set<T>[]) => new Set(sets.flatMap((s) => Array.from(s)))
