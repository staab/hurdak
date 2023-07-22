export default <T>(list: Iterable<T> | null): T | undefined => Array.from(list || [])[0]
