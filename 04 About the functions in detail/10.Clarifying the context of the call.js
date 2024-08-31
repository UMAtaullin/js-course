// THIS

const developer = {
  name: 'Tom',
  salary: 3000,
  getBonus(sum) {
    console.log(this.name, 'has a salary this month', this.salary + sum)
  }
}


const manager = {
  name: 'Anna',
  salary: 2000,
}

developer.getBonus(250)

developer.getBonus.call(manager, 150)
developer.getBonus.apply(manager, [200])

manager.getBonus = developer.getBonus.bind(manager)
manager.getBonus(100)