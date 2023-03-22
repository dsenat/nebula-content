// 1. Write a function that multiplies 3 input numbers together.
function numbers(){
    console.log(2*3*6)
}
numbers()

function multiply3Nums(num1,num2,num3){
    return num1*num2*num3
}
// 2. Write a function that takes in a number and logs all odd numbers leading up to that number
function countup(input){
    for(let i =0; i <= input; i++)
        if(i % 2 === 1){
             console.log(i)
    }
}
// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 
function initials (names){
    const initials = []
for(let i = 0; i < names.length; i++){
for(let j = 0; j < names[i].length; j++){
    if(names[i][j]===names[i][j].toUpperCase() && names[i][j] !== " "){
    console.log(names[i][j])
    }
}
}
}
names()
// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator


// 5. Write a function which takes in two arrays and returns those arrays combined together. 
function arrays (){

}