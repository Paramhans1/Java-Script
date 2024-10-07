// Practice Set 2 - Q1
const prompt = require("prompt-sync")({sigint:true});
let age = prompt("What is your age?");
age = Number.parseInt(age);
if(age>10 && age<20){
    console.log("your age is between 10 and 20")
}
else{
    console.log("your age is doesnt lie in between 10 and 20");
}




// Practice Set 2 - Q2
switch(age){
    case 12:
        console.log("your age is 12");
        break;
    case 14:
        console.log("your age is 14");
        break;
    case 16:
        console.log("your age is 16");
        break;
    case 18:
        console.log("your age is 18");
        break;
    default:
        console.log("your age is not special");
}






// Practice Set 2 - Q3
let a = prompt("Enter your Number");
a = Number.parseInt(a);
if(a%2==0 && a%3==0){
    console.log("your number is divisible by both 2 and 3");
}
else{
    console.log("your number is not divisible");
}





// Practice Set 2 - Q4
let b = prompt("Enter your Number");
b = Number.parseInt(b);
if(b%2==0 || b%3==0){
    console.log("your number is divisible by either 2 or 3");
}
else{
    console.log("your number is not divisible");
}







// Practice Set 2 - Q5
console.log(age>18?"You can drive":"you can not drive")
