// Connect your JS file to your HTML file


// Select the <h1> element using querySelector() and log it to the console
const h1Element = document.querySelector('h1')
console.log(h1Element)


// Select the <p> element using querySelector() and log it to the console
const pElement = document.querySelector("p")
console.log(pElement)

// Select the <ul> element using getElementById() and log it to the console
const ulElement = document.getElementById("list")
console.log(ulElement)
//Select the first <li> element using querySelector() and log it to the console
const liElement = document.querySelector("li")
console.log(liElement)
// Select the second <li> element using querySelectorAll() and array indexing, and log it to the console
const liElement = document.querySelectorAll("li")
const secondliElement = liElement[1]
console.log(secondliElement)

// Select all <li> elements using getElementsByClassName() and log them to the console
const liAllElements = document.getElementsByClassName("item")
console.log(liAllElements)

// Select the <ul> and create a new <li> and add it to the list
const ulmyElement = document.getElementById("list")
const liNewElement = document.createElement("li")
