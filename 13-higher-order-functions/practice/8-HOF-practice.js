// .sort() Practice

/* Question 1
Write a HOF to sort an array of numbers from largest to smallest */
const nums = [1,25,6,3,88,45,0]

function lowernums(arr){
    return arr.sort((a,b)=> b - a)
} 

/* Question 2
Write a HOF to sort peoples names by their length */
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]

function sortNames(arr){
    return arr.sort((a,b) => a.name.length - b.name.length)
}

/* Question 3
Write an HOF to sort an array of objects of people by their age youngest to oldest */

function sortAge(arr){
    return arr.sort((a,b)=> a.age - b.age)
}

/* Question 4
Write an HOF to sort an array of strings by the last letter of the string */
const strings = ['sam', 'john', 'daniel', 'vanessa']

function lastLetter(arr){
    return arr.sort((a,b)=> a)
}