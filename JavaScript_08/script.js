// functions in JavaScript 
// 1. Function Declaration
function average(x, y) {
    return (x + y)/2;
}
let a = 1;
let b = 2;
let c = 3;
console.log("Average of 'a' and 'b' is ",average(a,b));
console.log("Average of 'c' and 'a' is ",average(c,a));
console.log("Average of 'b' and 'c' is ",average(b,c));






// Arrow function
// example-1 
const sum = (p,q)=>{
    return p+q;
}
console.log(sum(9,7));




// example-2
const hello = () =>{
    console.log("hey how are you");
    return "absolutely fine yar"
}
let v = hello();
console.log(v);