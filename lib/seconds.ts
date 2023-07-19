export default (n: number, unit: "minute" | "hour" | "day" | "week") => {
  switch (unit.toLowerCase()) {
    case 'minute': return n * 60
    case 'hour': return n * 60 * 60
    case 'day': return n * 60 * 60 * 24
    case 'week': return n * 60 * 60 * 24 * 7
    default:
      throw new Error(`${unit} is not a valid unit`)
  }
}
