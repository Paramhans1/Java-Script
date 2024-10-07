//Practice Set 4 - Q1
let str = "har\"";                            //escape sequence character
console.log(str.length);






//Practice Set 4 - Q2
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = 'fox';
console.log("includes");
console.log(`the word "${word}" ${sentence.includes(word)? 'is':'is not'} in the sentence` )
console.log(sentence.includes("jumps"));
//name.include(search String)

console.log("startsWith");
console.log(sentence.startsWith('The'))
console.log(sentence.startsWith('quick'))
//name.startWith(search String)
console.log(sentence.startsWith('quick',4))
//name.startWith(search String, position)

console.log("endsWith");
console.log(sentence.endsWith('dog.'));
//name.endsWith(search String)
console.log(sentence.endsWith('lazy'));
console.log(sentence.endsWith('lazy',sentence.length-5));
//name.endsWith(search String, end position)






//Practice Set 4 - Q3
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());






//Practice Set 4 - Q4
const str1 = "Please give Rs 1000";
console.log(str1.slice(15));
let amount = Number.parseInt(str1.slice("Please give Rs ".length));
console.log(amount);
console.log(typeof(amount));






//Practice Set 4 - Q5
const frnd = "Hello";
frnd[3]="p";
console.log(frnd);
//Note: strings are immutable