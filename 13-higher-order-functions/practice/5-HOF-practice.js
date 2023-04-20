// .filter() Practice

/* Question 1
Write a function to filter an array for all the numbers greater than 5 */
const q1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

function filteredArray(arr){
    return arr.filter(num => num > 5)
}

/* Question 2
Write a function to filter an array for all the even numbers */
const q2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function evenFilters(arr){
    return arr.filter(num => num % 2 === 0)
}

/* Question 3
Write a function to filter an array for all the non number item */
const q3Array = [1, 'a', 'b', 2, {}, []]

function nonNumbersFilter(arr){
    return arr.filter(item => typeof item !== "number")
}

/* Question 4
Write a function to filter an array of objects for people over the age of 21 */
const partyPeople = [
  { name: 'John', age: 25 },
  { name: 'Jordan', age: 18 },
  { name: 'Frank', age: 50 },
  { name: 'Anna', age: 12 }
]

function Over21Filter(arr){
    return arr.filter(person=>person.age > 21)
}

/* Question 5
Write a function to filter out all letters from a string
  Hint: filter doesn't work on strings.. */

  function filterLetters(str){
   const letters = "abcdefghijklmnopqrstuvwxyz"
   let filteredStr = ""
   for(let i = 0; i < str.length; i++){
    if(!letters.includes(str[i])){
        filteredStr += str[i]
    }
   }
   return filteredStr
  }