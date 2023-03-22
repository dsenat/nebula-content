// - Define a function called `multiplyBy10` that takes in one `number` argument and returns that `number` multiplied by 10. Test the function with some numbers.
function multiplyBy10(num) {
   return num * 10
}
console.log(multiplyBy10(5))
// - Define a function called `sayGoodbye` that uses a `name` parameter and returns a farewell message incorporating that `name`.
function sayGoodbye (name){
  return `Goodbye, ${name}` 
}
console.log(sayGoodbye("Day"))
// - Define a function called `evenNumbers` that takes in an array as an argument and iterates over that array and returns a new array with all the even numbers from that input array (Hint: you can use the `modulus` operator to check whether a number is even or not).

function evenNumbers ([2, 3, 4, 5, 6,]){
    const evenNums = []
    for(let i = 0; i < evenNumbers.length i++){
        const currentNum = arr[i]
    if (currentNum % 2 === 0){
        evenNums.push(currentNum)
    }  
    }
    return evenNums

}
// - Define a function called `reverseWords` that takes in a string and returns a string with the order of words reversed.
function reverseWords (str){
    let reversed = str.split("").reverse().join("")
    return reversed     
}
reverseWords("rabbit")