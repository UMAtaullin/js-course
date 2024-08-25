const riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(str) {
        if (str === this.correctAnswer) {
            alert('Ответ правильный')
        } else if (this.tries > 1) {
            alert(`Ответ неправильный, 
                попыток осталось: ${--this.tries},
                подсказка: ${this.hints.reverse().pop()}`)
        } else {
            alert('Игра окончена')
        }
    },
}

window.onload = function () {
    document.getElementById('riddle').innerText = riddle.question
}

function check() {

    const input = document.getElementsByTagName('input')[0]

    const guessedAnswer = input.value

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer)
    }
}