// Arrays in javascript can store values of different datatypes
let marks = [91,82,63,84,false, "Not Present"];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);                                         // will be undefined because inedx 6 doesnt exist
console.log("No. of elements in array are " ,marks.length);
marks[6] = 89;                                                 // Adding a new vallue in the array
marks[0] = 35;                                                 // Arrays are mutable . it can be changes
console.log(marks); 
console.log(typeof(marks));                                     // Arrays are Object





// Array Methods
//name.toString()
let num = [1, 2, 3, 4];
console.log(num);
let b = num.toString()                                           // Converts into String
console.log(typeof(b));
console.log(b);

//name.join("joiner symbol")
let c = num.join("_");
console.log(c)
console.log(typeof(c));

// name.pop() : it removes the last element from original array
let d = num.pop();                                                 // pop() returns the popped elements
console.log(num);
console.log(d);

//name.push(): it adds new elements to the array
let a = [81, 93, 67, 49, 51]
let r = a.push(56);
console.log(a);                                                    // push() returns new array length
console.log(r);

// name.shift(): it removes the first element from the original array
let x = a.shift();
console.log(a); 
console.log(x);                                                     // shift() returns the removed element

// name.unshift(): it adds new elements to the beginning of the array
let y = a.unshift(78);
console.log(a);
console.log(y);                                                     // unshift() returns new array length

// delete Operator : it removes the elements but array length doesnt changes
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.length);
delete arr[0];
console.log(arr);
console.log(arr.length);

// array1.concat(array2, array3, array4) : merges two or more arrays
let newArray = arr.concat(a)                                         // concat() returns new merged array and doesnt change existing array
console.log(newArray);

// array.sort() : it sorts the array in alphabetical order and changes occur in original array
let fruits = ["banana", "orange", "apple", "grapes"];                
fruits.sort();                                                       // sorts in alphabetical order
console.log(fruits);
let z = [551, 22, 3, 14, 5, 6, 7, 8, 229];              
z.sort();                                                             // sorts in alphabetical order
console.log(z);

// array.sort(compareFunction) : it sorts the array in ascending or decending order and changes occur in original array
let compareIncreasing = (a, b) =>{
    return a - b;
}
let compareDecreasing = (a, b) =>{
    return b - a;
}
let par = [435, 3000, 9, 105, 6, 2, 771];
par.sort(compareIncreasing);
console.log(par);
par.sort(compareDecreasing);
console.log(par);
/*          (or)
par.sort((a, b) => a - b);                                           // sort() sorts the array in acending order
console.log(par);
par.sort((a, b) => b - a);                                           // sort() sorts the array in desending order
console.log(par);
*/

//name.reverse() : it reverse the original array
let roy = [10, 4, 57, 43, 27, 83, 5];
roy.reverse();
console.log(roy);

// splice()
// array_name.splice(starting position to add , no. of elements to be deleted , elements to be added)
let newarr = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let del_values = newarr.splice(2, 3, 1021, 1022, 1023, 1024, 1025);        // splice(): returns the deleted elements of array and modifies the array
console.log(newarr);
console.log(del_values);
console.log(typeof(del_values));

// slice() : doesnt change th original array
let myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sliced_array1 = myarray.slice(2);                                   // slice(): returns the sliced new array
let sliced_array2 = myarray.slice(2, 5);                                // slice(): returns the sliced new array
console.log(sliced_array1);
console.log(sliced_array2);
console.log(myarray);