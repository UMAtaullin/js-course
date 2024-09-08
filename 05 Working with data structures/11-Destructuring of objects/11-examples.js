// Destructuring 

const developer = {
  id: 1,
  fullName: 'Elon Musk',
  skills: ['C++', 'Python', 'SQL', 'JS', 'TS'],
  area: 'fullstack',
  languages: {
    english: 'native',
    flanch: 'A1',
    russia: 'A0',
  }
}

const area = 'bcd'

// let area, id
// ({area, id}) = developer

// the order is not important here, unlike the array
const {
  area: devArea = '',
  id,
  languages: {
    english
  } = {},
  skills: [basicSkill, secondSkill] = [],
  ...other
} = developer || {}

console.log(area, devArea, id, other)
console.log(english, basicSkill, secondSkill)

