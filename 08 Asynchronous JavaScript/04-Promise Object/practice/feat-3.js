// Задача №3: resolve()

console.log('start'); // 1

const promise1 = new Promise((resolve, reject) => {
  console.log(1) //2
  resolve(2) // 5
  console.log(3) // 3
})

promise1.then(res => {
  console.log(res)
})

console.log('end'); // 4

/* 
Этот фрагмент кода почти такой же, как и предыдущий; единственная разница в том, что после resolve(2) есть console.log(3).

Помните, что метод resolve не прерывает выполнение функции.Код, стоящий за ним, по - прежнему будет выполняться.
*/