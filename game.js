var userChoice = " ";
var computerChoice = 0;
var winner = " ";

//function for the your move button
function yourMove (){
     userChoice = prompt("Do you choose rock, paper or scissors?");
     
  
}

//compares the two results
function compare (choice1,choice2) {
    computerChoice = Math.random();

    if (computerChoice < 0.34) {
    computerChoice = "rock";
    } 
    else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } 
    else {
        computerChoice = "scissors";
    }





    if (choice1 === choice2) {
        winner = "The result is a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors"){
            winner = "computer chose scissors you win.";   
        }
        else {
         winner = "computer chose paper you lose.";   
        }
    }
    else if (choice1 === "paper"){
        if (choice2 === "rock") {
            winner = "computer chose rock you win.";
        }
        else {
            winner = "computer chose scissors you lose.";   
        }
    }
    else if (choice1 === "scissors"){
        if (choice2 === "rock") {
            winner = "computer chose rock you lose";   
        }
        else {
            winner = "computer chose paper you win.";   
        }
    }

    document.getElementById("result").innerHTML = winner;


};
