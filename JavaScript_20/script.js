// Practice Set 6 - Q1 & Q2 & Q3 & Q4 & Q5
let a = true;
while(a){
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    if(age>=0 && age<=4){
        location.href = "https://google.com";
        break;
    }
    if(age<0){
        console.error("Please Enter The valid age");                    // this will be displayed in console
        break;
    }
    if(age>=18){
        alert("You can drive");
    }
    else{
        alert("You cannot drive");
    }
    a = confirm("Do you want to Enter the age again")
}
let color = prompt("Enter your background color");
document.body.style.background = color;
