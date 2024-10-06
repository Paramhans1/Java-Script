// Loops with Arrays
let num = [3, 5, 7, 4, 9]
for(let i = 0; i<num.length; i++){
    console.log(num[i]);
}




// forEach loop : calls a function, once for each array element
// array.forEach((value, index, array)=>{})
console.log("forEach loop");
num.forEach((element)=>{
    console.log(element);
})
let new_num = num.forEach((value, index, array)=>{
    console.log(value, index, array);
})




/*
Array.from(html_collection)
forEach loop doesnt work upon 'html collections'. So first we need to convert 'html_collection' or any other 'object' into an 'array'
*/
let myname = "Harry"
let arr = Array.from(myname)                             // Convert String into Array
console.log(arr);





// for-of loop
console.log("for-of loop");
for(let i of num){
    console.log(i);                                  // here in "for-of loop" 'i' represent element of the array . we can directly print it
}




// for-in loop
console.log("for-in loop");
for(let i in num){                 
    console.log(i);                                    // here in "for-in loop" 'i' represent "index" or "key of array elements" of the array
}
for(let i in num){
    console.log(num[i]);                               // to print array elements use num[i] while using "for-in loop"                         
}