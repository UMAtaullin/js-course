// Sort
const developers = [
  {
    id: 1,
    fullName: 'Jon Smit',
    skills: ['HTML', 'CSS', 'JS'],
    area: 'frontend',
  },
  {
    id: 2,
    fullName: 'Adam Smit',
    skills: ['HTML', 'CSS', 'JS', 'React'],
    area: 'frontend',
  },
  {
    id: 3,
    fullName: 'Will Dowson',
    skills: ['HTML', 'CSS', 'JS', 'Python'],
    area: 'fullstack',
  },
  {
    id: 4,
    fullName: 'Sam Smit',
    skills: ['HTML', 'CSS', 'PHP', 'Laravel'],
    area: 'backend',
  },
]

developers.sort((a, b) => sorting(a.area, b.area))
console.log(developers)

const numbers = [1, 2, 23, 6, 10, 12, 5]
numbers.sort((a, b) => a - b)
console.log(numbers.reverse())

const cities = ['Madrid', 'Moscow', 'Ufa', 'Rio', 'Astana']
cities.sort(sorting)
console.log(cities)

function sorting(a, b) {
  if (a > b) return 1
  if (a < b) return -1
  return 0
}