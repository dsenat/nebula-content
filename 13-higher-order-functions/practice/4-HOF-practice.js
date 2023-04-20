// .forEach Practice

/* Question 1
Given an array of numbers, log each number to the console. */
const arrNumbers = [1, 2, 3, 4, 5]
arrNumbers.forEach(number => {
    console.log(number)
})
/* Question 2
Given an array of people, log a greeting to the console for each person. */
const people = ["Jacob", "Nancy", "Todd", "April"]
people.forEach(person => {
    console.log(`Hello, ${person}!`)
})
/* Question 3
Given an array of mixed values, log whether or not each value is undefined. */
const mixed = [1, 'hello', undefined, true, null, false, 'world', undefined]
mixed.forEach(value => {
    if (typeof value === "undefined") {
        console.log("Value is undefined")
    } else {
        console.log("value is defined")
    }
})
/* Question 4
Given an array of strings, log the vowel count for each string. */
const arrayOfStrings = ['Hi!', '🎶', "It's", 'a', 'beautiful', 'day', 'in', 'the', 'neighborhood', '🎶']
arrayOfStrings.forEach(strings => {
    let vowelCount = 0
    const vowels = "aeiou"
    string.toLowerCasesplit().split("").forEach((char) => {
        if (vowels.includes(char)) {
            count++
        }
    }

})
/* Question 5
Given an array of numbers, double each of them and log them to the console */
const numbers = [1, 2, 3, 4, 5]
const newNumbers = numbers.map(num => num * 2)