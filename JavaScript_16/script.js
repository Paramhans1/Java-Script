// Exercise 1 - Guess The number
let x = Math.floor(Math.random()*100) +1;
console.log(x);
let chance = 0;
const prompt = require("prompt-sync")({sigint:true});
for(let i = 0; i<100 ; i++){
    let guess = Number.parseInt(prompt("Guess a number between 1 and 100: "));
    if(guess < x){
        console.log(`your guess is smaller than Actual number`)
        chance++;
    }
    else if(guess > x){
        console.log(`your guess is greater than Actual number`)
        chance++;
    }
    else{
        console.log(`You guessed it`);
        break;
    }
}
console.log(`Your Score is ${100-chance}`);