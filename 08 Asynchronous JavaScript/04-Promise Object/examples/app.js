const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

promise1.then((value) => {
  return value + 4
})
  .then((value) => value - 1)
  .then(console.dir)
  .catch(console.error)
  .finally(fn5)

function fn5 () {
  console.log('Finished');
}
console.log(promise1);
// Expected output: [object Promise]

function withPromise() {
  return new Promise ((resolve, reject) => {
    resolve('Hello, Promise!')
  })
}

console.log('Hi there, me first')

setTimeout(() => console.log('When is my turn?'), 0)

withPromise()
  .then(console.log)
  .catch(value => console.log(value + '!!'))

console.log('Am I last in the queue?')