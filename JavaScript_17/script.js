// console methods as name suggest used in console of web browser
// List of different console methods
// displayed in "info" filter
console.log(console);                           



// asserts(): assertion fail when false data is defined
// if data is true it shows no error 
// displayed in "error" filter if assertion fails 
console.assert(5>555);
console.assert(60>55);



// clear() : this will clear the console
// console.clear();                             




// table() : displays 'key','value' pairs in tablular form
obj = {a:1, b:2, c:3, d:4}
console.table(obj);




// warn() : it is used to show "warning" inside console
// displayed in "warning" filter
console.warn("Please dont smoke")




// info() : it is used to show "info" inside console
// displayed in "info" filter
/console.info("This is an important info")




// error() : it is used to show "error" inside console
// displayed in "error" filter
/console.error("This is an error")





// time() and timeEnd() : time taken to execute that particular process
let a1 = "Harry"
console.time(a1);
console.timeEnd(a1);
// timeEnd() is used to end the time taken by a1 variable





console.time("forLoop");
for (let i = 0; i < 100; i++) {
    // code block to be executed
}
console.timeEnd("forLoop");         
// time taken to execute for loop