// Strings
let naam = "Param";                   // Allowed
let dost = 'Ram';                       // Allowed
console.log(naam);
console.log(naam[0]);
console.log(naam[1]);
console.log(dost[2]);
console.log(dost.length);
/*
let mydost = "Harsha';                  // Not Allowed
console.log(mydost);
*/





// Template litrals
let boy1 = "Ankit";
let boy2 = "Rahul";
console.log(`${boy1} is friend of ${boy2}`);                      // String Polation : inserting variable directly inside String using template literals
console.log(`My name is "Param"`)
console.log(`My teacher name is 'Aryan'`)
//we can write "" or '' withing backtick``





//Escape Sequence Character
// example:    \' and  \"   and  \n  and  \t   and  \r  
// here both \' are considered as one character
let fruit1 = "Banana\'s";
let fruit2 = 'Mango\"es';
let fruit3 = "Payaya\"s";
let fruit4 = 'Apple\'s';
console.log(fruit1.length);
console.log(fruit2.length);
console.log(fruit3.length);
console.log(fruit4.length);





// String Methods
// name.length
let myname = "Harry";
console.log(myname[0]);
console.log(myname[1]);
console.log(myname.length);



// name.toUpperCase 
console.log(myname.toUpperCase())



// name.toLowerCase 
console.log(myname.toLowerCase())


// name.slice(starting index , ending index excluding itself)
console.log(myname.slice(2, 3));
console.log(myname.slice(2));



// name.replace("new string" , "old string")
console.log(myname.replace("Harry" , "Param"))



//name.contact("string to be added")
let frnd = "Param"
console.log(myname.concat(" is the friend of ", frnd));
console.log((myname + " is the friend of "+ frnd));
let b = "Param" + "Shivika";
console.log(b);



//name.trim()
let frnd2 = "                meena                "
console.log(frnd2);
console.log(frnd2.trim());






// Strings are immutable : operations can be performend on strings but it cant be changed
//example
console.log(myname);
console.log(frnd);
console.log(frnd2);
//Strings are still the Same




// Using for loop to print String
for(let i=0; i<b.length; i++){
    console.log(b[i]);
}

// Note: visit 'mdn' Docs for more knowledge