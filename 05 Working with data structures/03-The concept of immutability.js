// Immutable
const arr = [1, 3, 5, 5, 7]

// don't use pop, push, shift, unshift, sort, reverse
const newArr = arr.slice(0, 3)
console.log(newArr)
const newArr2 = [0, ...arr]
console.log(newArr2)

const obj = {
  a: 1,
  b: 2,
  c: 3,
}

obj.d = 4 // mutation
obj.a = 10 // mutation

const obj2 = {
  ...obj,
  a: 11,
  d: 4,
} 

console.log(obj2)