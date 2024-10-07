// 7 types of primitive Datatype in JavaScript: NN SS BB U
console.log("7 types of primitive Datatype in JavaScript: NN SS BB U")
let a = null;
let b = 345;
let c = true;
let d = BigInt("45") + BigInt("5");
let e = "Harry";
let f = Symbol("I am a Symble");
let g;
console.log(a, b, c, d, e, f, g) 
console.log(typeof c)



// Non-Primitive Datatype - Objects
console.log("Non-Primitive Datatype - Objects");
const item = {
    "param" : true,
    "Age"   : 24,
    "Gender": "M",
    "Harry" : false
}
console.log(item["Gender"])
console.log(item["Harry"])
console.log(item["Age"])