// 1.   Write a function that tests if a string contains the string of '123' within it

function num(str){
    return str.includes("123")
}

// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false

function letters(str){
    return /a.*c/.test(str)
}

// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'


// 4.   Write a function that checks if all characters in a string are lowercase letters
function lowerCase(str){
    for(let i =0; i < str.length; i++){
        if(str[i] < "a" || str[i] > "z"){

        }
    }
}

function lowerCase(str){
    return /^[a-z]+$/.test(str)
}
// 5.   Write a function that checks if a string has an uppercase letter
function uppercase(str){
return /[A-Z]/.test(str)
}

// 6.   Write a function that checks if a string contains a dash or underscore 
function check(str){
    return (str.includes("-") || str.includes("_"))
}

// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end
function ending(str){
    return /\.com$/.test(str)
}

// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning


// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not
function firstLetter(str){
    return /^[A-Z]/.test(str)
}

// 10.   Write a function that utlizes regex to replicate the functionality of '  string  '.trim()
