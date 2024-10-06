/* if it shows 'prompt' not defined then
npm install prompt-sync
const prompt = require ("prompt-sync")({sigint: true})
*/


/*
alert is not part of JavaScript,
it's part of the window object provided by web browsers.
So it doesn't exist in the context you're trying to use it in.
*/
const prompt = require("prompt-sync")({sigint:true});
let a = prompt("Hey whats your age?");                                     // we use prompt for taking input .It takes input always in string type
console.log(typeof a);
a = Number.parseInt(a)
console.log(typeof a);




// conditional Statement
// if-else-if Statement
console.log("conditional Statement")
if(a<0){
    console.log("invalid age");
}
else if(a<9){
    console.log("Your a kid, you can even think of driving")
}
else if(a>9 && a<18){
    console.log("You can drive but you need to get a license");
}
else{
    console.log("You can apply for licence and you can drive");
}




//switch Statement
const b = prompt("what is favourite colour");
switch(b){
    case 'Yellow':
        console.log("I love mangoes");
        break;
    case 'Orange':
        console.log("I love Oranges");
        break;
    case "red" :
        console.log("I love Apples")
        break;
    default :
    console.log("I love all fruits");
}