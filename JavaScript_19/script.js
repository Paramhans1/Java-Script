// in console of web page. click window . it will show u all window objects properties and methods
// "window object" is also called "global object" which mean it provide various methods to control browser window
console.log(window);
window.console.log(window);
// both have same output


/*
Window Object are divided into 3 Type :
1. DOM : Document Object Model
2. BOM : Browser Object Model
3. JavaScript Cores
*/

// DOM : It considers whole "html" page as single javascript object and refered as "Document"
// "document.body" represents Page body as Js Object
document.body.style.background = "pink"
// "CSS" styles are fixed and static. So, if u want to changes style based on user action 




// BOM : represent aditional object provided by the browser(host environment) for working with everything except the document
// "alert", "confirm", "prompt" are also the part of "Browser object model" because this are aditional object provided by browser . they doesnt work on compiler
// type this in console it will redirect you to website 'location.href = "https://codewithharry.com" '