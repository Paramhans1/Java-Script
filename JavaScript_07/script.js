/*
Types of Loops in JavaScript
for loop
for in loop
for of loop
while loop
do while loop
*/


// for loop
console.log("for loop");
//Program to add first 'n' natural numbers
const prompt = require("prompt-sync")({sigint:true});
let n = prompt("Enter 'n' value");
let sum = 0;
for(let i=1; i<=n; i++){
    sum +=i;
    console.log(i, " +");
}
console.log("sum of first " + n +"natural number is " + sum)





//for in loop : it iterate on 'keys' of an object also work with arrays
console.log("for in loop");
let obj = {
    harry : 90,
    Param : 70,
    Shivam : 35,
    Rohan : 45,
    Shubham : 55,
    Ankit : 65
}
for (let a in obj){
    console.log("marks of " + a + " are " + obj[a]);
}





//for of loop : it iterate on characters of string or on elements of arrays
console.log("for of loop");
for (let b of "PARAM"){
    console.log(b);
}




// while loop
console.log("while loop");
let a = prompt("Enter your number");
a = Number.parseInt(a);

let i = 0;
while (i < a) {
    console.log(i);
    i++;
}





//do-while loop : first block is executed then condition is checked;
// execute atleast one time
console.log("do-while loop");
let num = prompt("Enter your number");
num = Number.parseInt(num);
let j = 0;
do {
    console.log(j);
    j++;
}
while(j<num);

