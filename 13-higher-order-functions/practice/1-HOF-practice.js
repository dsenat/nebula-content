/* Question 1
Write a higher-order function which takes in two numbers and performs a calculation with them
Write the callback functions separately
  Example:
    calculate(multiply, 2,4) => 8
    calculate(subtract, 2,4) => -2
    calculate(exponent, 2,4) => 16   */
function calculate(operation, num1, num2) {
    return operation(num1, num2)
}
function multiply(num1, num2) {
     return num1 * num2
}
calculate(multiply, 2, 4)

function subtract(num1, num2) {
    return num1 - num2
}
calculate(subtract, 2, 4)

function add(num1, num2) {
    return num1 + num2
}
calculate(add, 2, 4)
/* Question 2
Write a function that takes in any number of numbers and performs calculations on them
console.log(arguments) inside of a function to visualize your arguments
Write the callback functions separately
  Example:
    calculateAll(multiply,[1,4,1,231,5]) => 4620
    calculateAll(subtract, [2,4,5,7]) => -14
*/
function calculateAll(operation, numbers) {
    console.log(arguments);
    if (numbers.length < 2)
}
let result = numbers[0]
for(let i = 0; i <numbers.length; i++)

/* Question 3
Write a function that takes in a string and performs some form of manipulation on it
  Example:
    modify(yeller, 'I need a nap') => I NEED A NAP!!!
    modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
    modify(code, 'There is no cake') => Th-r- -s n- c-k-
*/
function yeller(str) {
    return str.toUpperCase()
}

function sarcastic(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toUpperCase()
        } else {
            result += str[i].toLowerCase()
        }
    }
    return result
}

function code(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "") {
            result += ""
        } else {
            result += "-"
        }
    }
    return result;
}

/* Question 4
Write a function that takes in an array filled with different data types and returns each data type
  Examples:
    oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['I love coding, 'goosfraba']

    oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['Nested Array!']

    oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    [10, Infinity]
*/
function oneType(dataType, arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === dataType) {
            result.push(arr[i])
        }
    }
}
