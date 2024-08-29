// Создайте функции-колбэки isOdd и isEven.  Обе принимают число, и возвращают true, соответственно, isOdd если переданное число нечетное, а isEven - когда число четное. В противном случае функции возвращают false.

function filterArray(array, callback) {
    const newArray = [];
    for (let i of array) {
      if (callback(i)) newArray.push(i);
    }
    return newArray;
  }
  const numbers = [1, 2, 3, 4, 5];
  
  function isOdd(num) {
    return num % 2 !== 0;
  }
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Для проверки используйте логи
  console.log(filterArray(numbers, isEven)); // Должен вывести: [2, 4]
  console.log(filterArray(numbers, isOdd)); // Должен вывести: [1, 3, 5]