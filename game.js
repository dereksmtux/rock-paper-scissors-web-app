var userChoice = " ";
var computerChoice = 0;
var winner = " ";
var winCounter = 0;
var LooseCounter = 0;
var CounterPhraseWin = "";
var CounterPhraseLoose = "";

//function for the your move button
function yourMove (x){
     userChoice = x;

     compare(userChoice, computerChoice);
     
  
}

//compares the two results and also genreates an answer for the computer
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
        document.getElementById('prize').src= "tie.png"
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors"){
            winner = "computer chose scissors you win."; 
            document.getElementById('prize').src= "win.png"; 
            winCounter ++;
            CounterPhraseWin = "Games won: " + winCounter;

        }
        else {
         winner = "computer chose paper you lose.";
         document.getElementById('prize').src= "lose.png" 
         LooseCounter ++;
         CounterPhraseLoose = "Games Lost: " + LooseCounter;  
        }
    }
    else if (choice1 === "paper"){
        if (choice2 === "rock") {
            winner = "computer chose rock you win.";
            document.getElementById('prize').src= "win.png";
            winCounter ++;
            CounterPhraseWin = "Games won: " + winCounter;
        }
        else {
            winner = "computer chose scissors you lose."; 
            document.getElementById('prize').src= "lose.png" 
            LooseCounter ++;
            CounterPhraseLoose = "Games Lost: " + LooseCounter;   
        }
    }
    else if (choice1 === "scissors"){
        if (choice2 === "rock") {
            winner = "computer chose rock you lose"; 
            document.getElementById('prize').src= "lose.png"  
            LooseCounter ++;
            CounterPhraseLoose = "Games Lost: " + LooseCounter;  
        }
        else {
            winner = "computer chose paper you win."; 
            document.getElementById('prize').src= "win.png";  
            winCounter ++;
            CounterPhraseWin = "Games won: " + winCounter;
        }
    }
    document.getElementById("prize").style.display = "inline";
    document.getElementById("result").innerHTML = winner;
    //todo
    document.getElementById("counterWin").innerHTML = CounterPhraseWin;
    document.getElementById("counterLoose").innerHTML = CounterPhraseLoose;
};

