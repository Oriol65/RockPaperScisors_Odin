// Rock Paper Scissors
    //console.log("Hello World") STEP 1 DONE
// Compare results STEP 5
function playRound(humanChoice, computerChoice){
    // Make it case insensitive
    console.log(humanChoice+" "+computerChoice)
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
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
function getHumanChoice(){
    return(prompt("Choose Rock, Paper, Scissors: "))
}

// PC picks one of three random choices STEP 2
    // Random Number 0-1
        // Create variable to store random number from 0-1
function getComputerChoice() {
    let randNum = Math.random();
    let choice="";
    if (randNum < 0.33) {
        choice="Rock";
    } else if (randNum < .66) {
        choice="Paper";
    } else {
        choice="Scissors";
    }
    return(choice);
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

    // FOR loop for 5 rounds