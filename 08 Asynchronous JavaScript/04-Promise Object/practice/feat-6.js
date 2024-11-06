console.log('start')  // 1

Promise.resolve(1).then((res) => {
  console.log(res)  // 3
})

Promise.resolve(2).then((res) => {
  console.log(res)  // 4
})

console.log('end') // 2

/*
Здесь Promise.resolve(1) вернет объект Promise, состояние которого fulfilled, а результат равен 1 . Это синхронный код.
*/