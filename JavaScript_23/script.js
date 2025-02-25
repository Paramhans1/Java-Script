const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
}
changeBgRed();
/*
Element only Navigation :

if we use just ".firstChild" then output may be any kind of node not necessaryly "html Elements"
example : #comment nodes , #text nodes
so we should use ".firstElementChild" to get the first element node, which only considers Element
similarly, 
document.previousElementSibling
document.nextElementSibling
document.firstElementChild
document.lastElementChild
*/


let b = document.body;
console.log("first child of b is : ",b.firstChild);                       // Output : Text
console.log("first child of b is : ",b.firstElementChild);                // Output : <nav></nav>