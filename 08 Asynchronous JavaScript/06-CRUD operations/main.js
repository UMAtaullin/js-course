// как результат возвращает нам промис
fetch('https://jsonplaceholder.typicode.com/posts/1',
  {
    method: 'PUT',
    body: JSON.stringify({id: 2, title: 'My title'})
  }
) 
  // после того как вернешь промис сделай нечто
  .then(response => {
    if (response.ok) { return response.json() }
    throw newError('Failed to fetch')
  }) // return new promise
  // метод json() преобразует полученные данные в js объект
  .then(console.log) // return data
  .catch(console.error); // return error