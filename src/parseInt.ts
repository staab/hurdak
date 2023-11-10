import parseFloat from "./parseFloat"

export default (x: string | number, fallback = 0) =>
  parseInt(parseFloat(x, fallback).toString(), 10)
