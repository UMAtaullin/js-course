// Задача №2: .then()

console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
})

promise1.then(res => {
  console.log(res)
})

console.log('end');

// Это фрагмент асинхронного кода.То есть коллбэк - функция в.then().

// Помните о том, что интерпретатор JavaScript всегда сначала выполняет синхронный код, а затем асинхронный.

// При столкновении с этой проблемой нам нужно только различать синхронный и асинхронный код.

// Output: start , 1 , end и 2 