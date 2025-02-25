// Exercise - 2 (Rock - Paper - Scissor)
const random_func = () =>{
    let str = "RPS"
    let index = Math.floor(Math.random()*str.length);
    return str.charAt(index);   
}
let a = true;
while(a){
    let you = (prompt("Enter your you (R=rock, P=paper, S=scissors):").charAt(0));
    console.log(`you = ${you}`);
    system = random_func();
    console.log(`system = ${system}`);
    if(system === you){
        alert("Its a draw. Please play agin");
        continue;
    }
    if(system == "R" && you == "P"){
        alert("Paper covers Rock. You win!");
    }
    else if(system == "P" && you == "R"){
        alert("Paper covers Rock. You lose!");
    }
    else if(system == "P" && you == "S"){
        alert("Scissor cuts Paper. You win!");
    }
    else if(system == "S" && you == "P"){
        alert("Scissor cuts Paper. You lose!");
    }
    else if(system == "S" && you == "R"){
        alert("Rock crushes Scissor. You win!");
    }
    else if(system == "R" && you == "S"){
        alert("Rock crushes Scissor. You lose!");
    }
    a = confirm("Do you want to play again");
}