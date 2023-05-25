//Write a function that takes in a number and returns the 3rd digit from that number




//Write a function that returns an array of all the numbers between 50 - 150 that are divisible by 3

function divisibleByThree() {
    let numbers = []
    for (let i = 50; i <= 150; i++) {
        if (i % 3 === 0){
            numbers.push[i]
        }
    }
    return numbers
}


//Write a function that takes in an array of numbers and returns the average of all the numbers
function average(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
}



//Write a function that takes in an array of elements and returns a true if every element inside is truthy
function truthy(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            return false
        }
    }
    return true
}



//Write a function that takes in a number and returns true if the number is odd and false otherwise

function Odd(number) {
    return number % 2 !== 0
}


//Write a function that takes in an array of numbers and returns the sum of all positive numbers

function positive(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i]
        }
    }
}

//Write a function that takes in a string input and returns only the letters that are capital letters

function capLetters(stringinput){
    let capitalLetters = ""
    for(let i = 0; i < stringinput.length; i++){
        let currentChar = stringinput.charAt(i)
        if( currentChar >= "A" && currentChar <= "Z"){
            capitalLetters += currentChar
        }
    }
    return capitalLetters
}



//Write a function that takes in a string and returns a count of all the non - letter characters




//Write a function that sorts an array of strings by the last letter in each string