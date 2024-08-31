// Higher order function
// Callback function

let twoSquared = () => 2 * 2

let threeSquared = () => 3 * 3

console.log(twoSquared())

// включаем параметры и предыдущие варианты не нужны
let numSquared = num => num * num

console.log(numSquared(4))

// function copyArrayAndSquareNumbers(arr) {
//   const output = []

//   for (const i of arr) {
//     output.push(i ** 2)
//   }
//   return output
// }

// console.log(copyArrayAndSquareNumbers([1, 4, 6]))

// function copyArrayAndDividedByTwo(arr) {
//   const output = []

//   for (const i of arr) {
//     output.push(i / 2)
//   }
//   return output
// }

// console.log(copyArrayAndDividedByTwo([1, 4, 6]))

function copyArrayAndDoSmth(arr, instruction) {
  const output = []

  for (const i of arr) {
    output.push(instruction(i))
  }
  return output
}

console.log(copyArrayAndDoSmth([1, 4, 6], numSquared))