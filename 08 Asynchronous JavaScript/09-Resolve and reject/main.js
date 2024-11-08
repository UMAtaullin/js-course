/* У промисов помимо их прямого использования есть еще встроенные методы, т.е. помимо того, что мы можем new Promise(создать объект промис), либо мы можем получить от кого то готовые промисы и обрабатывать его, мы можем с объекта промис использовать какие то методы, их 5 шт.
Мы начнем с двух последних, которые используются для процесса рб, когда мы как фронтенд делаем приложение, бэкенд рб в это время делают свою часть, реализуют сервис (REST API— это когда серверное приложение дает доступ к своим данным клиентскому приложению по определенному URL), которые возвращает нам те самые данные, но пока данных нет, а мы хотим свою работу сделать, то мы можем сымитировать ответ сервера.
*/

async function getData() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  let data = await res.json()
  return data
}

async function getPictures() {
  // let res = await fetch('https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY')
  // let data = await res.json()
  // return data.map(picture => picture.urls.small)

  // генерируем моковые данные
  return Promise.resolve([{id: 1, src: ''}])
  // return Promise.reject('Ошибка получения изображений')
}

getPictures()
  .then()
  .catch(console.error)
