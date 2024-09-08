// Template string
const firstName = 'Elon'
const lastName = 'Musk'

console.log(`
  My name is ${firstName} ${lastName}
  My age is ${2024 - 1988}`)


const html = `
  <div>
    <h1>${firstName} ${lastName + `asd ${lastName}`}</h1>
    <button>click me</button>
  </div>
`

console.log(html)