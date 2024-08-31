/**
 * Создает функцию, которая добавляет заданное число к своему аргументу.
 * 
 * @param {number} x - Число, которое будет добавлено к аргументу новой функции.
 * @returns {function} Функция, которая принимает число и возвращает его сумму с x.
 */
function addByX(x) {
  function add(num) {
    return x + num
  }
  return add
}

const addByTwo = addByX(2)
console.log(addByTwo(3)) // 5
console.log(addByTwo(5)) // 7
