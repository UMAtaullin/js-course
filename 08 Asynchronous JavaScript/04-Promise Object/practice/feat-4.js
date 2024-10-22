// Задача №4: resolve() не вызывается

console.log('start'); // 1

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

promise1.then(res => {
  console.log(2) // promise не вып, 2 не выводится в консоль
})

console.log('end'); // 2


/* 
В этом коде метод resolve никогда не вызывался, поэтому promise1 всегда находится в состоянии ожидания(pending).Так что promise1.then(…) никогда не выполнялся. 2 не выводится в консоли.
*/