const spainCapital = 'Valencia'
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

// Добавьте код здесь, переписав конструкцию выше на switch
switch (spainCapital) {
  case 'Madrid' || 'madrid' || 'MADRID':
    isCorrectAnswer = true
    break
  default:
    isCorrectAnswer = false