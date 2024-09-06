const spainCapital = 'madrid'
let isCorrectAnswer

// Конструкция if..else
// if (spainCapital === 'Madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'MADRID') {
//     isCorrectAnswer = true;
// } else {
//     isCorrectAnswer = false;
// }

switch (spainCapital) {
  case 'Madrid':
  case 'madrid':
  case 'MADRID':
    isCorrectAnswer = true
    break
  default:
    isCorrectAnswer = false
}

console.log(isCorrectAnswer)

// оператор ИЛИ (||) не работает в данном случае так, как я ожидал. Этот оператор возвращает первое истинное значение.Поскольку 'Madrid' является непустой строкой, она сама по себе считается истинной, и выражение всегда вернёт 'Madrid'
// switch (spainCapital) {
//   case 'Madrid' || 'madrid' || 'MADRID':
//     isCorrectAnswer = true
//     break
//   default:
//     isCorrectAnswer = false
// }