// для хорошего тона код обернем в ф
async function getData() {
  let res = await fetch('https://gorest.co.in/public/v1/posts')  
  let data = await res.json()
  console.log(data)
}

await getData()
console.log('message')