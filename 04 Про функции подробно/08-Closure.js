// Closer
// 1. Функции, которые возвращаются из других ф
// 2. Возвращаемая ф запоминает scope

function hi(name) {
  const hiName = () => console.log('hi', name)

  return hiName
}

//hi('world') // ничего не происходит
const sayHi = hi('world')
sayHi()

function outer() {
  let counter = 0

  function incrementCounter() {
    console.log(++counter)
  }

  return incrementCounter
}

const count1 = outer()
count1()
count1()
count1()
count1()

const count2 = outer()
count2()
count2()
count2()
