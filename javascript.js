// Rock Paper Scissors
    //console.log("Hello World") STEP 1 DONE
// INPUT one of three choices STEP 3
let getHumanChoice = prompt("Choose Rock, Paper, Scissors: ")
    // Case Insensitive
console.log(getHumanChoice)
    // Error if something else chosen, Write again
// PC picks one of three random choices STEP 2
    // Random Number 0-1
        // Create variable to store random number from 0-1
let randNum = Math.random();
        // Create variable to store choice
let getComputerChoice = "";
    // Convert to 3 choices with equal odds
if (randNum < 0.33) {
    getComputerChoice = "Rock";
} else if (randNum < .66) {
    getComputerChoice = "Paper";
} else {
    getComputerChoice = "Scissors"
}
//console.log(getComputerChoice)
// Compare results STEP 5
    // Tie Scenario
    // Win Scenario
    // Lose Scenario
// DECLARE scores STEP 4
// FOR loop for 5 rounds