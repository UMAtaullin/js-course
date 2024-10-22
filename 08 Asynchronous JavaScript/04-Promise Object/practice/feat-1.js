// Задача №1: Конструктор Promise

console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

console.log('end');

// Блоки синхронного кода всегда выполняются последовательно сверху вниз.

// Когда мы вызываем new Promise(callback), функция коллбэка будет выполнена сразу же.

// Output: start, 1, end