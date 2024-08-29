// Варианты записи функций

// 1. Function Declaration
// можем вызвать в любой момент
function sum(a, b) {
  return a + b
}

// 2. Function Expression
const sum = function (a, b) {
  return a + b
}

// 3. IIFE (Immediately-invoked function expression)
(function(a, b) {
  return a + b
})(5, 34)

// 4. Arrow function
const sum = (a, b) => {
  return a + b
}

const sum2 = (a, b) => a + b
const add1 = x => x + 1