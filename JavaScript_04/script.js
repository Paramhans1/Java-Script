// Arthimetic Operators
console.log(" Arthimetic Operators")
let a = 6;
let b = 4;
console.log("a + b = ", a + b);                                   // Addition
console.log("a - b = ", a - b);                                   // Minus
console.log("a * b = ", a * b);                                   // Multiplication
console.log("a ** b = ", a ** b);                                 // Exponent (a*a*a*a............'b' times)
console.log("b ** a = ", b ** a);                                 // Exponent (b*b*b*b............'a' times)
console.log("a / b = ", a / b);                                   // Divide
console.log("a % b = ", a % b);                                   // Modulus (reminder)
console.log("a++ = ", a++);                                       // Post-Increment
console.log("a = ", a);
console.log("++a = ", ++a);                                       // Pre-Increment
console.log("a = ", a);
console.log("a-- = ", a--);                                       // Post-Decrement
console.log("a = ", a);
console.log("--a = ", --a);                                       // Pre-Decrement
console.log("a = ", a);



// Assignment Operators
console.log("Assignment Operators");
let c = 10;
let d = 20;
console.log("c + = 5 now the value of c = ", c += 5);                   // C = c + 5
console.log("c - = 5 now the value of c = ", c -= 5);                   // C = c - 5
console.log("d * = 5 now the value of c = ", c *= 5);                   // C = c * 5
console.log("d / = 5 now the value of c = ", c /= 5);                   // C = c / 5
console.log("d ** = 5 now the value of c = ", c **= 5);                 // C = c ** 5





// Comparision Operators
console.log("Comparision Operators");
let e = 10;
let f = "10";
console.log("e == f = ", e == f);                                       // Equal to
console.log("e != f = ", e != f);                                       // Not-Equal to
console.log("e === f = ", e === f);                                     // Equal value and type 
console.log("e !== f = ", e !== f);                                     // Not-Equal value or Not-Equal type 
console.log("e > f = ", e > f);                                         // Greater than
console.log("e >= f = ", e >= f);                                       // Greater than or Equal to
console.log("e < f = ", e < f);                                         // Less than
console.log("e <= f = ", e <= f);                                       // Less than or Equal to





// Ternary Operator ----------------------- condition ? trueExpression : falseExpression
console.log("Ternary Operator");
console.log((e === f)? true : false)






// Logical Operator ------------------------- Operates on boolean
console.log("Logical Operator");
let x = 5;
let y = 6;
console.log(x<y && x==5);                      // 'true' and 'true' = 'true'
console.log(x>y || x==5);                      // 'false' or 'true' = 'true'
console.log(!false);                           // '!false' = 'true'
console.log(!true);                            // '!true' = 'false'






// Bitwise Operators -------------------------------- Operators on bits (binary digits)
console.log("Bitwise Operator");
let g = 2;                                       // 2 in bit form is "10"
let h = 3;                                       // 3 in bit form is "11"
console.log(g & h);                              // Bitwise AND
console.log(g | h);                              // Bitwise OR
console.log(g ^ h);                              // Bitwise XOR
console.log(~g);                                 // Bitwise NOT
console.log(g << 1);                             // Left Shift
console.log(g >> 1);                             // Right Shift