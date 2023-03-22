// 1.   Create an object for a celebrity and save it to a variable
const celeb = {
    Name: "Bryson Tiller",
    Profession: "Singer",
    Age: 28,
    Gender: "Male", 
}
// 2.   Using dot-notation add 3 key-value pairs to the celebrity
celeb.height = 5'7,
celeb.albums = 2, 
celeb.partner = true,
// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
celeb["birthPlace"]  = "Kentucky",
celeb["children"] = 2,
celeb["label"] = "RCA Records",
// 4.   Write a function that allows us to add or update 3 properties
function add (){

}


// 5.   Using a loop - log all the celebrities properties to the console
for(let key in celeb){
console.log(key [celeb])
}
