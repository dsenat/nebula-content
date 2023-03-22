// Declare an empty array
const favColors = []
// Declare an array with all the data types you can think of within it
const dataTypes = [true, 22, "candy", [1,2,3]]
// Make a list of classmates names first names in an array
const Fnames = ["Abdel", "Asad","Alexus", "Dayana", "Donald","Juliet", "Judah","Matt" ]
// Get the length of that previous array
console.log(Fnames.length)
// Check the type of the previous array
console.log(typeof(Fnames))

// Check if the previous array is an array
const isArray = Array.isArray((Fnames))
console.log(isArray)
// Using indexing, grab your name from that previous array
const myName = Fnames[3]
console.log(myName)
// Use the following variable to get the student at the index from the array of students
let index = 2; 
let student = Fnames[2]
console.log(student)

// Update the array to have each element as a students first and last name : 'firstName lastName'
const firstNames = ["Abdel", "Asad","Aulexus", "Dayana", "Donald","Juliet", "Judah","Matt" ]
firstNames[0] = "Abdel Bessard"
firstNames[1] = "Asadur Rahman"
firstNames[2] = "Aulexus Rochell"
firstNames[3] = "Dayana Senat"
firstNames[4] = "Donald Williams"
firstNames[5] = "Juliet Vorbe "
firstNames[6] = "Judah Belgrave"
firstNames[firstNames.length - 1] = "Matt Reiley"

console.log(firstNames)