buttons = document.querySelectorAll('[data-clicked]')

buttons.forEach(el => el.addEventListener('click', clickCounter))

function clickCounter () {
  // console.log(this.dataset.clicked++)
  let count = this.getAttribute('data-clicked') || 0
  this.setAttribute('data-clicked', ++count)
  console.log(`Clicked ${count} times`)
}