// Given this array
// We want to append a new list item to a list by looping over this array
// We want to do this only with JavaScript
// YOU SHOULD NOT TOUCH THE HTML FILE

// Steps
// Create a list and append it to the body
// Loop over todos and create a list item for each one and append it to the newly created list with the todo text.
const todos = ['Walk the dog', 'Make Dinner', 'Do Dishes', 'Mow Lawn', 'Make Bed']
 
let ul = document.createElement("ul")

todos.forEach(todos => {
let li = document.createElement("li")
li.innerText = todos
ul.appendChild(li)

})
document.body.appendChild(ul)

// for (let i = 0; i < todos.length; i++){
// let li = document.createElement("li")
// li.innerText = todos[i]
// list.appendChild(list)
// }

let body = document.querySelector("body")
body.style.fontSize = "30px"
body.style.backgroundColor = "Teal"
body.style.color = "Pink"
body.style.fontFamily = "Comic Sans MS"
