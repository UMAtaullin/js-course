const btn = document.getElementById('toggle-btn')
const el = document.querySelector('.element')

btn.addEventListener('click', toggleVisibility)

function toggleVisibility () {
  el.classList.toggle('visible')
}