/* 
DOM manipulation : when we want to access the 'html page' and then after we try to manipulate its elements using 'JavaScript'



There are 3 main types of nodes in the DOM tree :
TEXT NODE : content inside "<h1></h1> tag" or "<title></title> tag"
ELEMENT NODE : "<title></title>" tag and "<h1></h1>" tag . here 'title' node and 'h1' node itself are element node
COMMENT NODE : comment line <!-- content -->



In html page ,<html> is at the root and <head> and <body> are its childrens.....etc . and 'TEXT NODE' is always a leaf of the tree




AUTO CORRECTION : if any error in html is encountered by browser , browser tries to correct it
example : <table> tag must contain <tbody>
*/




/*
walking the DOM :
document.head                                    : it will returns page "<head></head>" tag
document.body                                    : it will returns page "<body></body>" tag
document.body.innerHTML = "<h1>new content</h1>" : it will change the particular content of "<body></body" tag
document.documentElement                         : it will return page "<html>" tag .And its type is "Object"
document.title                                   : it will return "title" of html page but not "<title></title>" tag .And its type is "String"  
document.title = new_title                       : it will change the title of html page
console.log(document.body);                      : if "<script></script>' tag is written before the body . so when "<script>" is executed it dont know weather body exeist or not. hence, it will return "null" 
*/




/*
Children of an elements : Direct as well as deeply nested elements of an element are called its children.
Child Node : Elements that are direct children.
Descedant Node : All nested elements, Childen, Their childen and so on...
*/





// element.firstchild : return first child node of an elemnt
console.log(document.body.firstChild);                               // Output in browser console : #text
/* because in between <body> tag and <div> tag  whole line is left empty . it will consider it as text node . hence, above output is "Text node"
<body>
<div>
<h1>This is my html page</h1>
</div>
<script src="script.js"></script>
</body>
*/

console.log(document.body.firstChild);                               // Output in browser console : <div></div>
/* because there is no space between <body> tag and <div> tag . hence, first child node after <body> tag is <div></div>
<body><div>
<h1>This is my html page</h1>
</div>
<script src="script.js"></script>
</body>
*/






// element.lastchild : return last child node of an element
console.log(document.body.lastChild);                               // Output in browser console : <script src="script.js"></script>






// element.childNodes : returns all the child nodes of an element
console.log(document.body.childNodes);                               // Output in browser console : NodeList(3) [div, text, script]



// check weather there are any child nodes or not 
console.log(document.body.hasChildNodes());                           // Output in browser console : true


/*
Note:
element.childNodes[0]                                ===     element.firstchild
element.childNodes[element.childNodes.length - 1]    ===     element.lastchild
*/




let arr = Array.from(document.body.childNodes);                        // converts Nodelist into Array.     
console.log(arr);
/*
Note:
childNodes look linke an array but they are not arrays. They are Nodelist . hence array methods wont work
Use "Array.from(Collection)" to convert into array
*/




/*
Notes on DOM collection :
They are read-only
They are live collections, which means it will update its output for any changes in code
They are iterable using "for_of_loop"
*/




/*
$0 : In broswer console "$0" used to refer the selected element
example : "$0.childNodes" will return all the child nodes of selected element
$1 : In broswer console "$1" used to refer the previously selected element
*/






/*
Siblings : Siblings are nodes that are children of the same parent
example : <head> and <body> are siblings

There are three types of siblings :
1. Previous sibling : previousSibling
2. Next sibling : nextSibling
3. Sibling : childNodes[index] or childNodes[index - 1] or childNodes

<body> is said to be "next" or "right" siblings of <head>
<head> is said to be "previous" or "left" siblings of <body>

*/
console.log(document.body.nextSibling);
console.log(document.body.previousElementSibling);




console.log(document.body.firstChild);                               // Output in browser console : <div></div>
let a = document.body.firstChild;
console.log(a.parentNode)                                            // it return node even if its parent is html element or not
// example : console.log(document.documentElement.parentNode);       // output : document
console.log(a.parentElement)                                         // it returns null if its parent is not html elemnt
// example : console.log(document.documentElement.parentElement);    // output : null
console.log(a.firstChild.nextSibling)
console.log(document.body.lastChild);                                // Output in browser console : <script></script>