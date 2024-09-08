/**
 * 
 * @returns {array}
 */

function getInfo() {
  return ['BMW', 'X3']
}

const [
  carName = '',
  carSeries = '',
] = getInfo() || []

console.log(carName)