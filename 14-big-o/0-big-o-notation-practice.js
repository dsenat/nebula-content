
// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function loopAndPrint(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
O(n) is linear it is running a loop and has to loop through the array and process each input

// 1.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max;
}

O(n) is linear its looping through an array and is adding each value to the max

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function printLast(arr){
    console.log(arr[arr.length-1]);
}
O(1) is constant it is just looking for the length of the array

// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function everyOther(str){
    let newStr = '';

    for(let i = 0; i < str.length; i+=2){
        newStr += str[i]
    }

    return newStr;
}

O(n) is looping through every other string

// 4.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function doubled(num) {
    return 2 * num
}
O(1) constant its returning num

// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multipleSteps(num) {
    let final = 4 * num
    return final * 3
}
O(1) constant assignment and return not looping

// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function backwardsArr(arr) {
    let arrReversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
      arrReversed.push(arr[i])
    }
    return arrReversed
}
O(n) linear  creating a new array and then looping through and pushing those values into new array reversed

// 6.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multiplyAll(arr1, arr2) {
    if (arr1.length !== arr2.length) return undefined
    let total = 0
    for (let i of arr1) {
      for (let j of arr2) {
        total += i * j
      }
    }
    return total
}

O(n^2) quadratic performing 2 loops and theres a nested loop

// 7.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums = [10,20,30,40];
nums.push(50);

O(1) constant pushing 50 into the array

// 8.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums2 = [10,20,30,40];
nums.unshift(0);

O(n) constant removing the number from the array

// 9.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function logTime(arr) {
    let numberOfLoops = 0
    for (let i = 1; i < arr.length; i *= 2) {
      numberOfLoops++
    }
    return numberOfLoops
}
O(log n) running loops and cutting input size in half each time