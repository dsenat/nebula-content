// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]
function numbers (arr){
    let newNumbers = []
    for(let i = 0; i < numbers.length; i++)
    newNumbers.push(numbers[i])

}
  
  // 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
  // Example string = "happy birthday", letter = "a", should return true
  // Example string = "happy birthday", letter = "q" should return false
function words (string, letter){
    for(let i = 0; i < string.length; i++){
     if(string[i] === letter) 
     return true  
    }
}
  
  // 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
  // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]
  function fullNames(names) {
    let firstNames = []
    for(let i = 0; i < names.length; i++){
    firstNames.push(names[i].spilt('')[0])
    return firstNames
  }
  }

  
  // 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
  // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"
  function greet (name1, greeting){
  return `${greeting}, ${name1}`)
  }
greet("Goodnight","Dayana")
  
  // 5. Write a function that takes in the year someone was born and returns their age.
  // Example: birth year: 2000 returns 23
  function Age (){
    let year = 1991
  }