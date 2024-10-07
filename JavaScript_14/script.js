// array.map((value, index, array)=>{}) : creates a new array by performing some operation on each element. original array remains unchanged
let arr=[45, 23, 21, 27, 67, 9];
let arr1 = arr.map((value) =>{
    console.log(value);
    return value*2;
})
console.log(arr1);
let arr2 = arr.map((value, index, array) =>{
    console.log(value, index, array);
    return value + index;
})
console.log(arr2);
console.log(arr);                                          // Orginal array remains unchanges
/*
difference between "Map" and "forEach"
map(): creates a new Array
forEach(): does not create a new Array, it only executes the callback function for each element in the array
*/






// array.filter((value)=>{}) : creates a new array with all elements that pass the test implemented by the provided function
let arr4 = [45, 12, 8, 4, 71, 9];
let arr5 = arr4.filter((a)=>{
    return a<10;
})
console.log(arr5);
console.log(arr4);                                          // Orginal array remains unchanges       






// array.reduce((harry)=>{}) : reduces the array to a single value
//  note: it returns a single value not array. Array remains unchanged
let arr6 = [1, 2, 3, 4, 5, 6];
let arr7 = arr6.reduce((h1, h2)=>{
    return h1 + h2;
})
console.log(arr7);

//       or

const reduce_func = (h1, h2)=>{
    return h1 + h2;
}
let arr8 = arr6.reduce(reduce_func)
console.log(arr8);
/*
h1+h2 =h1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10+ 5 = 15
15+ 6 = 21
*/