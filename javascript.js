// Rock Paper Scissors
    //console.log("Hello World") STEP 1 DONE
// Compare results STEP 5
function playRound(humanChoice, computerChoice){
    // Make it case insensitive
    humanChoice= humanChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();
    // Tie scenarios
    if (humanChoice == computerChoice){
        return("Tie");
    } 
    // Win scenarios
        else if (((humanChoice=="rock")&&(computerChoice=="scissors"))||((humanChoice=="paper")&&(computerChoice=="rock"))||((humanChoice=="scissors")&&(computerChoice=="paper"))){
        return("Win");
    } 
    // Everything else
        else {
        return("Lose");
    }
}
// INPUT one of three choices STEP 3
let getHumanChoice = prompt("Choose Rock, Paper, Scissors: ")
console.log(getHumanChoice)

// PC picks one of three random choices STEP 2
    // Random Number 0-1
        // Create variable to store random number from 0-1
let randNum = .73;//Math.random();
        // Create variable to store choice
let getComputerChoice = "";
    // Convert to 3 choices with equal odds
// DECLARE scores STEP 4
    // Variable for human score
let humanScore = 0;
    // Variable for computer score
let computerScore = 0;
if (randNum < 0.33) {
    getComputerChoice = "Rock";
} else if (randNum < .66) {
    getComputerChoice = "Paper";
} else {
    getComputerChoice = "Scissors"
}
console.log(getComputerChoice)
//console.log(getComputerChoice)

let result = playRound(getHumanChoice, getComputerChoice);
console.log(result);
if (result=="Tie"){
    console.log("It's a tie!");
    console.log("Your Score: "+humanScore+" Oponent's score: "+computerScore);
} else if (result=="Win") {
    console.log("You Win!");
    console.log(getHumanChoice + " beats "+ getComputerChoice+"!");
    humanScore ++;
    console.log("Your Score: "+humanScore+" Oponent's score: "+computerScore);
} else {
    console.log("You Lose!");
    console.log(getComputerChoice + " beats "+ getHumanChoice+"!");
    computerScore ++;
    console.log("Your Score: "+humanScore+" Oponent's score: "+computerScore);
}



    // FOR loop for 5 rounds