// Mapping
// map, forEach

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

function print(el, index, array) {
  console.log(el ** 2, array[index])
}

// dose not change original array
const res = numbers.forEach(print)

console.log(res)

// нам будет возвращаться новый массив
const resMap = numbers.map(el => el * 2)
console.log(resMap)