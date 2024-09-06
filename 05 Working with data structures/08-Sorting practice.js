const food = ["Apple", "Melon", "Banana", "Yogurt", "Orange", "Stawberry"]

const players = [
  {
    id: 1,
    name: 'Cristiano',
    surname: 'Ronaldo',
    club: 'Juventus',
  },
  {
    id: 2,
    name: 'Lionel',
    surname: 'Messi',
    club: 'Barcelona',
  },
  {
    id: 3,
    name: 'Karim',
    surname: 'Benzema',
    club: 'Real Madrid',
  },
  {
    id: 4,
    name: 'Maxi',
    surname: 'Gomez',
    club: 'Valencia',
  },
  {
    id: 5,
    name: 'Quincy',
    surname: 'Ames',
    club: 'Spartak',
  },
]

console.log(food.sort(sorting))
console.log(players.sort((a, b) => sorting(a.surname, b.surname)))

function sorting(a, b) {
  if (a > b) return 1
  if (a < b) return -1
  return 0
}