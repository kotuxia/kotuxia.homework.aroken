// 1.

// function greeting(name) {
//     return `Hello, ${name}`
// }

// const greetingFunction = greeting('Kate')
// console.log(greetingFunction)

// 2.

// const numbers = [36, 4, 7, 14, 11, 10, 49, 99, 9]

// function getNumbersGreaterThanTen (array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 10) {
//             console.log(array[i])
//         }
//     }
// }

// const result = getNumbersGreaterThanTen(numbers)

// console.log(result)

// 3.

function calculator(firstNumber, secondNumber, operatorSelection) {
    if (operatorSelection === 'minus') {
        return firstNumber - secondNumber
    } else if (operatorSelection === 'plus') {
        return firstNumber + secondNumber
    } else if (operatorSelection === 'multiply') {
        return firstNumber * secondNumber
    } else if (operatorSelection === 'divide') {
        return firstNumber / secondNumber
    } else {
        return 'This operation is not available'
    }
}

// let result = calculator(5, 7, 'multiply')
let result = calculator(5, 7, 'trum')

console.log(result)