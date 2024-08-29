const calculateAverage = function (...numbers) {
    let total = 0
    for (const num of numbers) {
        total += num/numbers.length
    }
    return total
}

console.log(calculateAverage(3, 2, 5, 6))