// Когда мы работаем со странице нас может интересовать не просто какое то действие, а само событие, мы можем проверить:
// 1. что произошло ?
// 2. где произошло ?
// 3. при каких обстоятельствах ?
// У меня на странице есть поле ввода и кнопка, они выбраны в js код и на них я навесил по обработчику событий
const btn = document.querySelector('button')
const inputs = document.querySelectorAll('input')

// btn.addEventListener('click', handleEvent)
// input.addEventListener('keypress', handleEvent)

// у каждого будет обрабатываться enter и делаться фокус на след эл
inputs.forEach(input => input.addEventListener('keypress', handleEvent))

function handleEvent(event) {
  console.log(event)
  console.log(event.target)
  console.dir(event.target)

  if (event.key === 'Enter') {
    event.target.nextElementSibling.focus()
  }
}

