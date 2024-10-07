// Practice Set 3 - Q1 
const marks = {
    harry : 95,
    Param : 79,
    Ankit : 87,
    Rohan : 92,
    Kumar : 88,
    Rohit : 65
}
console.log("for loop");
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}
//"Object.keys(marks)" will create array with 'object keys' as its elements





// Practice Set 3 - Q2
console.log("for in loop");
for(let key in marks){
    console.log("marks of "+ key +" are " + marks[key]);
}





// Practice Set 3 - Q3
const prompt = require("prompt-sync")({sigint:true});
let num = 9;
let i;
while (i != num){
    i = parseInt(prompt("Guess a correct number between 1 and 10"));
}
console.log("Congratulation you have entered correct number");




// Practice Set 3 - Q4
const mean = (a, b, c, d, e) =>{
    return (a+b+c+d+e)/5;
}
console.groupCollapsed("Mean of 5, 6, 7, 8, 9 is " + mean(5,6,7,8,9));