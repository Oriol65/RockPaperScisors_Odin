function getHumanChoice(){
    return(prompt("Choose Rock, Paper, Scissors: "))
}
function getComputerChoice() {
    let randomNum = Math.random();
    let choice="";
    // Math.random gives random number from 0-1. 1/3 and 2/3 are used to equal choices. 
    if (randomNum < 1/3) {
        choice="Rock";
    } else if (randomNum < 2/3) {
        choice="Paper";
    } else {
        choice="Scissors";
    }
    return(choice);
}
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    // Game ties when both choices are equal
    if (humanChoice == computerChoice){
        return("Tie");
    } 
    // Human wins in the following scenarios
        else if (((humanChoice=="rock")&&(computerChoice=="scissors"))||((humanChoice=="paper")&&(computerChoice=="rock"))||((humanChoice=="scissors")&&(computerChoice=="paper"))){
        return("Win");
    } 
    // Everything else means the user has lost
        else {
        return("Lose");
    }
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++){
        let humanChoice=getHumanChoice();
        let computerChoice=getComputerChoice()
        let result = playRound(humanChoice, computerChoice);
        console.log(result);
        if (result=="Tie"){
            console.log("It's a tie!");
            console.log("Your Score: "+humanScore+" Oponent's score: "+computerScore);
        } else if (result=="Win") {
            console.log("You Win!");
            console.log(humanChoice + " beats "+ computerChoice+"!");
            humanScore ++;
            console.log("Your Score: "+humanScore+" Oponent's score: "+computerScore);
        } else {
            console.log("You Lose!");
            console.log(computerChoice + " beats "+ humanChoice+"!");
            computerScore ++;
            console.log("Your Score: "+humanScore+" Oponent's score: "+computerScore);
        }
    }
    console.log("The final score is: ")
    console.log("Human: "+humanScore+" Computer:"+computerScore)
    if (humanScore>computerScore){
        console.log("You have Won the game, Congratulations!")
    } else if (computerScore>humanScore) {
        console.log("You have lost the game, try again!")
    } else {
        console.log("You have tied, Try again!")
    }
}

playGame();
