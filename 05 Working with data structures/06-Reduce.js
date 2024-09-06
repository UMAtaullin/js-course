// Reduce

const staff = [
  {
    id: 1,
    name: 'John Doe',
    salary: 1000,
  },
  {
    id: 2,
    name: 'Sara Smith',
    salary: 900,
  },
  {
    id: 3,
    name: 'Elton John',
    salary: 1100,
  },
  {
    id: 4,
    name: 'Mo Williams',
    salary: 1000,
  },
]

// Первый вариант решения
// const budget = staff.reduce((acc, user) => {
//     if (user.salary >= 1000) {
//         return acc + user.salary
//     } else {
//         return acc;
//     }
// }, 0);

// Второй вариант решения
const budget = staff.reduce((acc, user) => acc + user.salary, 0)
console.log('\n Общий бюджет:')
console.log(budget)

const budgetForBigPersonal = staff.reduce((acc, user) => user.salary >= 1000 ? acc + user.salary : acc, 0)
console.log('\n Большой персонал:')
console.log(budgetForBigPersonal)

const budgetForSmallPersonal = staff.reduce((acc, user) => user.salary < 1000 ? acc + user.salary : acc, 0)
console.log('\n Маленький персонал:')
console.log(budgetForSmallPersonal)

const salaries = staff.reduce((acc, user) => {
  return [...acc, user.salary]
}, [])
console.log('\n Зарплаты:')
console.log(salaries)