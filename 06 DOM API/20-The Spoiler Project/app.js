document.getElementById('myBtn').addEventListener('click', toggleVisible)

function toggleVisible() {
  const spoiler = document.getElementById('spoiler')
  spoiler.classList.toggle('closed')
  attachSpoilerEvents()
}

function handleEscape(event) {
  console.log(event.key)
  if (event.key === 'Escape') {
    toggleVisible()
    detachSpoilerEvents()
  }
}

function attachSpoilerEvents() {
  document.addEventListener('keydown', handleEscape)
}

function detachSpoilerEvents() {
  document.removeEventListener('keydown', handleEscape)
}