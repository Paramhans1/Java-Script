// Practice Set 5 - Q1 
let arr = [1, 2, 3, 8, 9];
const prompt = require("prompt-sync")({sigint:true});
let a = prompt("Enter a number: ");
a = Number.parseInt(a);
arr.push(a)
console.log(arr);







// Practice Set 5 - Q2
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let a1;
do{
    a1 = prompt("Enter a number");
    a1 = Number.parseInt(a1);
    arr1.push(a1);
    console.log(arr1);

}
while(a1!=0);







// Practice Set 5 - Q3
// array.filter((value)=>{}) : creates a new array with all elements that pass the test implemented by the provided function
let arr2 = [1, 5, 9, 10, 15, 20, 26, 60];
let n = arr2.filter((x)=>{
    return x%10 == 0
})
console.log(n);







// Practice Set 5 - Q4
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let m1 = arr3.map((value)=>{
    return value*value;
})
console.log(m1);







// Practice Set 5 - Q5
let arr4 = [1, 2, 3, 4, 5];
let r = arr.reduce((x1, x2)=>{
    return x1 * x2;
})
console.log(r);