const cities = ['Madrid', 'Moscow', 'Ufa', 'Rio', 'Astana']

const [Мадрид, , ...otherCities] = cities || []
console.log(Мадрид, otherCities)

const numbers = [1, 2, [23, 6], 10, 12, 5]
const [
  a = 0,
  b = 0,
  [c = 1, d = 1] = []
] = numbers || []

console.log(a, b, c, d)

let x = 10
let y = 20
[y, x] = [x, y]

console.log(y, x)