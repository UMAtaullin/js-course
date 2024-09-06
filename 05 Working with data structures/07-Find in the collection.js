// Find in collection

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
    skills: ['HTML', 'CSS', 'JS', 'PHP'],
    area: 'backend',
  },
  {
    id: 4,
    fullName: 'Sam Smit',
    skills: ['HTML', 'CSS', 'PHP', 'Laravel'],
    area: 'backend',
  },
]

console.log(developers.find(el => el.area === 'frontend'))
console.log(developers.find(el => el.skills.includes('PHP')))
console.log(developers.findIndex(el => el.skills.includes('PHP')))

