// Spread/rest operator

const numbers = [1, 2, 23, 6, 10, 12, 5]

const cities = ['Madrid', 'Moscow', 'Ufa', 'Rio', 'Astana']
const arr2 = [...cities]
// console.log(arr2)

console.log(cities)
console.log('Tula', ...cities, 'Samara')

const dev1 = {
  id: 1,
  fullName: 'Ural Ataullin',
  skills: ['HTML', 'CSS', 'JS', 'Python'],
  area: 'fullstack'
}

const dev2 = {...dev1}
dev2.id = 11
console.log(dev1)

console.log(sum(...numbers))

function sum(a, b, ...args) {
  let res = a + b
  for (let i of args){
    res += i
  }
  return res
}