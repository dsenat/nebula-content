// 1.   Create an array that contains two of your favorite things to do
const favThingsToDo = ["spa","hot yoga"]
// 2.   Using an array method, add another thing you like to do to that list
favThingsToDo.push("travel")
console.log(favThingsToDo)
// 3.   Reverse the order of the array (remember, if needed use MDN)
const reverse = favThingsToDo.reverse()
console.log(reverse)
//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log(daysOfWeek.length)
// 5.   log the 4th element in the array
const day = daysOfWeek[3]
console.log(day)
// 6.   Remove the first element in the array. Log the new array and the element removed from the array
const removeDay = daysOfWeek.shift()
console.log(removeDay)
console.log(daysOfWeek)
// 7.   Put 'Sunday' back at the beginning of the array and log the new array
const returnDay = daysOfWeek.unshift(removeDay)
console.log(daysOfWeek)
// 8.   Remove the last element in the array. Log the new array and log the element removed
const dayRemoved = daysOfWeek.pop()
console.log(dayRemoved)
console.log(daysOfWeek)
// 9.   Add 'Saturday' back to the end of the array and log the new array
const dayAdded = daysOfWeek.push(dayRemoved)
console.log(daysOfWeek)
//10.   Replace 'Thursday' with 'Friday Junior'
daysOfWeek[4] = "Friday Junior"
console.log(daysOfWeek)
//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
const myDay = daysOfWeek[6]
console.log(`My favorite day of the week is ${myDay}`)
//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
console.log(phone + " " + laptop)
//13.   Write a line of code to test if something is an array or not
const favColors = ["pink", "red", "orange"];
if(favColors === "blue", "red", "white"){
    console.log(Array.isArray(favColors))
}





