// У любого event есть штука связанная с дефолтным поведением браузера
// Когда оборачиваем формой, то enter приводит к перезагрузке страницы - это действие браузера по умолчанию и мы можем с ним работать, например, методом preventDefault

const btn = document.querySelector('button')
const inputs = document.querySelectorAll('input')

const form = document.querySelector('form')

// у каждого будет обрабатываться enter и делаться фокус на след эл
inputs.forEach(input => input.addEventListener('keypress', handleEvent))
form.addEventListener('submit', handleSubmit)

function handleEvent(event) {
  console.log(event.target)


  if (event.key === 'Enter') {
    event.preventDefault()

    event.target.nextElementSibling.focus()
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (validate()) {
    // submit AJAX
    form.reset() // очищает поля
  } else {
    alert ('Fill in thе empty fields')
  }
}

function validate() {
  let isValid = true
  inputs.forEach(el => {
    if (!el.value.trim()) {
      el.style.borderColor = 'red'
      isValid = false
    } else {
      el.style.borderColor = 'currentColor'
    }
  })

  return isValid
}

