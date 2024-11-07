// как результат возвращает нам промис
fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => {
    if (response.ok) { return response.json() }
    throw newError('Failed to fetch')
  }) 
  .then(console.log) 
  .catch(console.error); 

// с использованием async/await
async function getData() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts/')  
  let data = await res.json()
  console.log(data)
}

getData().then(console.log)
console.log(1)

// с использованием Promise.all
Promise.all([
  fetch('https://jsonplaceholder.typicode.com/posts/1'),
  fetch('https://jsonplaceholder.typicode.com/posts/2'),
  fetch('https://jsonplaceholder.typicode.com/posts/3')
])
.then(responses => Promise.all(responses.map(res => res.json())))
.then(data => console.log(data))
.catch(console.error);