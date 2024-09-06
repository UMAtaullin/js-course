const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// коллекция это массив, который содержит не примитивы, а объекты
// для хранения только нечетных значений
// const oddNumbers = numbers.filter(getOddNumbers)
// function getOddNumbers(number) {
//   if (number % 2 !== 0) {
//     return number
//   }
// }

// if map return new value, filter return true or false
const oddNumbers = numbers.filter(el => el % 2 !== 0)

console.log(oddNumbers)

const users = [
  {
    id: 1,
    name: 'Brad Pette',
    isMarried: true,
  },
  {
    id: 2,
    name: 'Diana Moor',
    isMarried: false,
  },
  {
    id: 3,
    name: 'Olivie Giroud',
    isMarried: true,
  },
  {
    id: 4,
    name: 'Brad Parker',
    isMarried: true,
  },
]

const marriedUsers = users.filter(el => el.isMarried)
const includeName = users.filter(el=>el.name.includes('Brad'))
console.log(marriedUsers)
console.log(includeName)