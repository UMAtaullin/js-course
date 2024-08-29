// Внутри ф есть отдельная локальная память, где мы можем создавать переменные с любыми названиями.

// let message = ''
const age = 15

if (age>=18) {
  let message = 'Hello'
} else {
  let message = 'Adios'
}

console.log(message) // ошибка, переменной не существует