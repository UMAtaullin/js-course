// errors
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('В функцию не переданы числа для сложения')
  }
  return a + b
}

try{
  sum()
  console.log('not seen')
} catch(err) {
  console.error(err)
}

console.log('end')