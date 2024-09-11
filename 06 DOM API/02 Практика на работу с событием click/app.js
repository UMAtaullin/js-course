let buttons = document.querySelectorAll('.accordion')

buttons.forEach(el => el.addEventListener('click', changeVisible))

function changeVisible () {
    this.nextElementSibling.classList.toggle('show')
}