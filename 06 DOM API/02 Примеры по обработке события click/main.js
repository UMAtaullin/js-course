const btn = document.querySelector('button')
const element = document.querySelector('.element')

btn.addEventListener('click', changeVisibility)

function changeVisibility () {
  element.classList.toggle('visibility')
}

// function changeVisibility() {
//   if (element.style.display === 'none') {
//     element.style.display = 'block'
//   } else {
//     element.style.display = 'none'
//   }
// }