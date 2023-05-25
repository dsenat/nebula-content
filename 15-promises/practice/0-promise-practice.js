// 1.   What is the order of output?
setTimeout(() => {
    console.log('a');
}, 10);
console.log('b');

new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
console.log('e');

setTimeout(() => {
  console.log('f');
}, 0);

setTimeout(() => {
    console.log('g');
}, 20);

new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))

//b
//e
//d,c
//h, i
//f
//a
//g


// 2.   Create a new promise for something you may or may not do. 
//      After a few seconds log whether it has been done.

let floorSwept = Math.random() >= 0.5
let sweepFloor = new Promise(resolve, rejection)
setTimeout(() => {
    if (floorSwept){
        resolve("The floor is nice & swept")
    }else{
        reject("Damn forgot to sweep the floor")
    }
}, 5000)

// 3.   Using the prior example use .then and .catch to handle responses and rejections
sweepFloor
.then(success => console.log(success))
.catch(reason => console.log(reason))
.finally(()=> console.log("")
)

// 4.   What does a promise resolve to?
a promise resolves too a value:
String
number
array
objects
promise


// 5. What is the output of the following code?

 
const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then((v) => {
    console.log(v);
  });

