// 1.   Write a for loop that looks for the letter a
//      The loop should log the letter 'a' to the console
//      STOP immediately after finding the letter 'a'
 let word = "fantastic"
for(i = 0; i < word.length; i++){
    console.log("We found A")
    break;
}
// 2.   Write a for loop that looks for a number
//      The loop should log 'at index _ there is the number _' to the console 
//      Stop immediately after finding that number
//      ex: Input: ['a','b','c', 100,'e']
//          Output: 'at index 3 there is the number 100'

let number = ["day", "d", 60]

//for(let i = 0; number[i] = 60; i++){
//     console.log(`at index 2 there is the number ${number[i]}`)
//     break;
// }
// // 3.   Using the continue keyword loop over an array of numbers & strings
// //      If the current element is a number skip it
// //      Otherwise add the element to an array
// //      After finishing the loop log the new array to the console
 
let random = ["wonderful", "spice", 56, 44, "snow"]
const letters = []
 for(let i = 0; i < random.length; i++){
    if(typeof(random[i]) === "number"){
        continue;
    }
    words.push(random[i])
 }