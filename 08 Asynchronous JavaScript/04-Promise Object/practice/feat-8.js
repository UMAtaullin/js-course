const promise = new Promise((resolve, reject) => {
  console.log(1); // 1
  setTimeout(() => {
    console.log("timerStart"); // 4
    resolve("success"); // 6
    console.log("timerEnd"); // 5
  }, 0);
  console.log(2); // 2
});

promise.then((res) => {
  console.log(res);
});

console.log(4); // 3

/*
Нам просто нужно выполнить эти три шага:

    Найти синхронный код.

    Найти код микрозадачи.

    Найти код макрозадачи.

Пр выполнении микрозадачи ловушка: поскольку текущий Promise все еще находится в состоянии ожидания (pending), код в данный момент выполняться не будет. Только после выполнения макрозадачи состояние promise становится fulfilled .
И в конце с помощью Event Loop снова выполняется микрозадача.
*/