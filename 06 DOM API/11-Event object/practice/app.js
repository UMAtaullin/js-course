// buttons = document.querySelectorAll('button')

// buttons.forEach(el => el.addEventListener('click', counterClick))

document.body.addEventListener('click', counterClick);

function counterClick(event) {
  if (event.target.tagName === 'BUTTON') {
    // Get current value data-clicked
    let clickedCount = parseInt(event.target.getAttribute('data-clicked'), 10)
    // Increase counter
    clickedCount += 1
    // Update data-clicked
    event.target.setAttribute('data-clicked', clickedCount)

    console.log(`Кнопка ${event.target.id} нажата ${clickedCount} раз(а)`)
  }

  }
