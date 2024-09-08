// JSON - JavaScrip Object Notation
// this is one object or array per file
// there are no functions
// all keys are in double quotes, numbers without
// arrays and objects can be used as values
// there is no last comma

const obj = {
  a: 1,
  print() {console.log('hi')} // after stringify disappears
}
// console.log(String(obj))
console.log(JSON.stringify(obj)) // {"a":1}

const developer = `{
  "id": 1,
  "fullName": "Elon Musk",
  "skills": ["C++", "Python", "SQL", "JS", "TS"],
  "area": "fullstack",
  "languages": {
    "english": "native"
  }
}`

const myObj = JSON.parse(developer)
console.log(myObj.fullName) // Elon Musk