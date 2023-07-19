export default (n: number, unit: "second" | "minute" | "hour" | "day" | "week") => {
  switch (unit.toLowerCase()) {
    case 'second': return n * 1000
    case 'minute': return n * 1000 * 60
    case 'hour': return n * 1000 * 60 * 60
    case 'day': return n * 1000 * 60 * 60 * 24
    case 'week': return n * 1000 * 60 * 60 * 24 * 7
    default:
      throw new Error(`${unit} is not a valid unit`)
  }
}
