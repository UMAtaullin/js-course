// Задание 1
const spainCapital = 'madrid';
let isCorrectAnswer;

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

console.log(
    spainCapital == 'Madrid' ||
    spainCapital == 'madrid' ||
    spainCapital == 'MADRID' ? true : false
)

// switch(spainCapital) {
//     case 'Madrid':
//         isCorrectAnswer = true;
//         break;
//     case 'madrid':
//         isCorrectAnswer = true;
//         break;
//     case 'MADRID':
//         isCorrectAnswer = true;
//         break;
//     default:
//         isCorrectAnswer = false;
// }


// Задание 2
const a = 1;
const b = 2;
let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// Добавьте код здесь, переписав конструкцию выше на тернарный оператор
result = a + b < 4 ? 'Мало' : 'Много';