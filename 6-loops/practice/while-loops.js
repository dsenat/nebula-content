// Reminder: control-c will kill an infinitely running node-process

// 1.   Write a while loop that loops over a string until it finds the letter "a"
let string = "this is a string"

let i = 0
while(string[i] !== "a"){
    console.log(i,string[i])
    i++
  }

let i = 0
while(i < string.length){
    if(string[i] === "a"){
        console.log(string[i])
        i++
    }
}


// 2.   Write a while loop that logs to the console the 'count' until the 'count' reaches 100
//      Inside the while loop be sure to increase count by some number
let count = 0

while(count < 100){
    count +=5
    console.log
}