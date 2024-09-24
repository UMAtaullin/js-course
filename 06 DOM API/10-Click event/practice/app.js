buttons = document.querySelectorAll('.accordion')

buttons.forEach(el => el.addEventListener('click', Visibility))

function Visibility () {
  this.nextElementSibling.classList.toggle('show')
}