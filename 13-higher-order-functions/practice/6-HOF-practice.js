// .reduce() Practice

/* Question 1
Write a HOF to reduce an array of numbers to all the numbers added up */
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function sumArray(arr){
    return arr.reduce((accumalator, currentValue) =>  accumalator + currentValue)
}

/* Question 2
Write a HOF to reduce all numbers in an array to all numbers multiplied together */

function multiplyArray(arr){
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue)
}

/* Question 3
Write a HOF to reduce all numbers in an array to the largest number */


function largestNum(arr){
    return arr.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue))
} 

/* Question 4
Write a HOF to find the oldest person in a group */
const partyPeople = [{ name: 'John', age: 25 }, { name: 'Jordan', age: 18 }, { name: 'Frank', age: 50 }, { name: 'Anna', age: 12 }]

function oldest(arr){
    return arr.reduce((oldest, current)=> {
        return(oldest.age > current.age) ? oldest : current
    })
}

let oldest = oldestPerson(partyPeople)
console.log(oldest)