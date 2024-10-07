console.log("difference betweeen 'let' , 'var' ,'const'");
/*
'var' is globally scoped 
var: can be updated and redeclared within the scope

'let' , 'const' both are block scoped
let: can be updated but can not be redeclared 
const: neither be updated nor redeclared
'const' variable has to be initiallized while declaring itself unlike 'let' and 'var'
try to preffer 'let' instead of 'var'
*/
var a = 45;
let b = 2;
let c = null;
const d = undefined;
{
    let a = 'param';                                                    
    // (updated and redeclared)
    console.log(a);



    let b = 595;
    // only updated not redeclared
    console.log(b)
    // var c = 89;                                                       
    // ('let' cannot be redeclared)
}
console.log(a);
console.log(b);
console.log(c);
console.log(d);
