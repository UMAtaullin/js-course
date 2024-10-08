const btn = document.getElementById('btnId')
const modal = document.getElementById('modalId')
const close = document.querySelector('.close')

btn.addEventListener('click', openModal)
close.addEventListener('click', closeModal)

const modalContent = document.querySelector('.modal-content');
modalContent.addEventListener('click', (event) => {
  event.stopPropagation(); 
})

function openModal() {
  modal.classList.add('open')
  attachModalEvents()
}

function closeModal() {
  modal.classList.remove('open')
  detachModalEvents()
}
// Close modal on outside click
function outsideClick(event) {
  if (event.target.closest('.modal') === modal) {
    closeModal()
  }
}
// Close modal on escape key press
function handleEscape(event) {
  if (event.key === 'Escape') {
    closeModal()
  }
}

function attachModalEvents() {
  close.addEventListener('click', closeModal);
  document.addEventListener('click', outsideClick);
  document.addEventListener('keydown', handleEscape);
}

function detachModalEvents() {
  close.removeEventListener('click', closeModal);
  document.removeEventListener('click', outsideClick);
  document.removeEventListener('keydown', handleEscape);
}