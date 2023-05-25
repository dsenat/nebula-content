// ## Recursion Practice 1

// Basic syntax of a recursive function
function recursiveFunction (input) {
    // Base case
    if (input === 'base case') {
      return 'base case'
    } else {
      // Recursive case
      return recursiveFunction(input)
    }
  }
  
  /* Question 1:
  Write a recursive function that takes in a number and returns the factorial of that number.
    - What is a factorial? A way to find the product of a number and all the numbers that come before it.
    - ex: 5 -> 5 * 4 * 3 * 2 * 1 = 120
  */
  
  // Solution Here
  function factorial (num) {
  if(num === 1){
    return 1
  }else{
   return num * factorial(num - 1)
  }
  }
  // Test Case - Logs nothing if test passes
  console.assert(factorial(5) === 120, {
    Expected: 120,
    Actual: factorial(5),
    Message: 'Question 1 - Test Failed'
  }) // 120
  

  /* Question 2:
  Write a recursive function that takes in a number and returns the sum of all the numbers from 1 to that number.
    - ex: 5 -> 1 + 2 + 3 + 4 + 5 = 15
  */
  
  // Solution Here
  function sumToN (n) {
  
  }
  
  // Test Case
  console.assert(sumToN(5) === 15, {
    Expected: 15,
    Actual: sumToN(5),
    Message: 'Question 2 - Test Failed'
  }) // 15
  
  /*
  Question 3:
  Write a recursive function that takes in a string and returns the number of vowels in that string.
    - ex: 'hello' -> 2
  */
  
  // Solution Here
  function countVowels (str){
  if(str === ""){
    return 0
  }else{
    if(vowels.includes(str [0].toLowerCase())){
        return 1 + countVowels(str.slice(1))
    }else{
        return countVowels(str.slice(1))
    }
  }
  }
  // Test Case - Logs nothing if test passes
  console.assert(countVowels('hello') === 2, {
    Expected: 2,
    Actual: countVowels('hello'),
    Message: 'Question 3 - Test Failed'
  }) // 2
  
  /*
  Question 4:
  Write a recursive function that takes in a number and returns the sum of all its digits.
    - ex: 123 -> 1 + 2 + 3 = 6
  */
  
  // Solution Here
  function sumDigits (n) {
  
  }
  
  // Test Case - Logs nothing if test passes
  console.assert(sumDigits(123) === 6, {
    Expected: 6,
    Actual: sumDigits(123),
    Message: 'Question 4 - Test Failed'
  }) // 6
  
  /* Question 5:
  Write a recursive function that takes in a number and returns the nth number in the Fibonacci sequence.
    - What is the Fibonacci sequence? A sequence of numbers where each number is the sum of the previous two numbers.
    - ex: 5 -> 1 + 1 + 2 + 3 + 5 = 12
  */
  
  // Solution Here
  function fibonacci (n) {
  
  }
  
  // Test Case - Logs nothing if test passes
  console.assert(fibonacci(5) === 5, {
    Expected: 5,
    Actual: fibonacci(5),
    Message: 'Question 5 - Test Failed'
  }) // 5
  