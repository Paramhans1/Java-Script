// alert() : Used to invoke a mini window with a message
alert("Hello everyone");



// prompt() : Used to take user input as a string
//prompt("message String", "default_value")
let a = prompt("Enter yor age", "18");
alert("You Entered age of type " + (typeof a));
a = Number.parseInt(a);
alert("Your type has changes to a " + (typeof a));





// confirm() : displays a message and waits for user to press "OK" or "CANCEL". Returns true for ok and false for cancel
let write = confirm("Do you want to write it to the page")
if(write){
    document.write(a);
}
else{
    document.write("Please allow me to write");
}
/*
 Note : Prefer not to use in user facing interface . because its exact look and location depends on browser
 and it blocks the main execution of the code until user interacts with it.
 use "Models" instead
 */