const supporter1 = {
  club: 'Milan',

  chant() {
    const messageOutput = () => console.log('Forza', this.club)

    setTimeout(messageOutput, 2000)
}
}

const supporter2 = {
  club: 'Inter'
}

supporter1.chant()
supporter2.chant = supporter1.chant.bind(supporter2)
supporter2.chant()