// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp

const regex1 = /\w+/
const regex2 = new RegExp('\\w+')

const str = 'JS is cool language. Everybody should learn JS'
console.log(/JS/.test(str))
console.log(/js/i.test(str))

console.log(str.replace(/js/i, 'php'))
console.log(str.replace(/js/gi, 'php'))

console.log(str.match(/js/i))
console.log(str.match(/js/gi))