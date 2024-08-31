// THIS

const cat = {
  name: 'Tom',
  say() {
    // стрелочная ф не добавляет никого своего контекста
    const greeting =() => console.log(this.name)
    // а обычна ф ссылается на window
    // function greeting() { console.log(this.name) }

    setTimeout(greeting, 2000)
  }
}
