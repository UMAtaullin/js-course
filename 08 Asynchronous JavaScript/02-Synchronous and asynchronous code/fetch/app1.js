// с помощью fetch создаем запросы (строка адреса) на какой то сервер для получения данных 
// V(общая) = v(у нас) + v(провайдера) + v(сервера), поэтому ф async, мы не хотим создавать эту задержку и она не останавливает основной поток
// let res= fetch('https://gorest.co.in/public/v1/posts')  
let res= await fetch('https://gorest.co.in/public/v1/posts')  
console.log(res)
// await ждет когда будет выполнен запрос и только тогда выведет сообщение
console.log('синхронная функция')

// чтобы получить данные
let data = await res.json()
console.log(data)


