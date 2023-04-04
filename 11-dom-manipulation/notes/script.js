// COUNTER EXERCISE

// Select the body element from index.html
let bodyElement = document.body
// Set an attribute of 'style' to the body tag and add a background color of anything other than white
document.body.style.backgroundColor = "yellow"
/* -------------------------------------------------------------------------- */

// Create an h1 element
let h1Element = document.createElement("h1")
// Append a new h1 element to the body element as a child
document.body.appendChild(h1Element)
// Add text to the h1 element 
h1Element.innertext = "Hello There"
// Assign the background color of this element to something unique
h1Element.style.backgroundColor = "E2F89C";
// Set a new style attribute to the h1 element
h1Element.setAttribute("style","color: teal;")
// Add font size to the h1Element
h1Element.style.fontSize = "45px"
// Set the default text to the number zero
h1Element.innerText = "0"
/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
let button = document.createElement("button")

// Append the button element to the body element
bodyElement.appendChild(button)
// Add text to the button that says "Add One"
button.innerText = "Add One"
// Add a class attribute to button
button.classList.add("button-class")
/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
let button1 = document.createElement("button")
button.innerText = "Decrement"
// Add the button element to the body element
bodyElement.appendChild(button1)
// Add text to the button element that says "Subtract One"
button1.innerText = "Subtract One"
// Add a class attribute of style to the button element
button1.classList.add("button-class")
/* -------------------------------------------------------------------------- */
// INCREMENT BUTTON FUNTION
// Create functionality that, when you click this button it increases the h1 value
button.addEventListener("click", (event) => {
    h1Element.innerText ++;


})
/* -------------------------------------------------------------------------- */
// DECREMENT BUTTON FUNCTION 
// Create functionality that, when you click this button it decreases the h1 value
button1.addEventListener("click", (event) => {
    h1Element.innerText --;


})