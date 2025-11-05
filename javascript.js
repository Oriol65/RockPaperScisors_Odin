function getHumanChoice(score){
    //Selects the buttons
    const playerRock = document.querySelector('#playerRock');
    const playerPaper = document.querySelector('#playerPaper');
    const playerScissors = document.querySelector('#playerScissors');
    //Starts listening for clicks, then plays round with choice and score
    playerRock.onclick=()=> score= playRound('rock', score);
    playerPaper.onclick=()=> score= playRound('paper', score);
    playerScissors.onclick=()=> score=playRound('scissors', score);
}

function getComputerChoice() {
    //random number from 0 to 1
    let randomNum = Math.random();
    let choice="";
    // transforms random 0/1 to rock, paper & scissors
    if (randomNum < 1/3) {
        choice="rock";
    } else if (randomNum < 2/3) {
        choice="paper";
    } else {
        choice="scissors";
    }
    return(choice);
    //Need to add a change of picture for computer choice
}
function playRound(humanChoice, score){
    let computerChoice = getComputerChoice();
    let result='';
    // Game ties when both choices are equal
    if (humanChoice == computerChoice){
        result = 'Tie';
    } 
    // Human wins in the following scenarios
        else if (((humanChoice=="rock")&&(computerChoice=="scissors"))||((humanChoice=="paper")&&(computerChoice=="rock"))||((humanChoice=="scissors")&&(computerChoice=="paper"))){
            result='Win';
            score[0] ++;
    } 
    // Everything else means the user has lost
        else {
        result='Lose';
        score[1] ++;
    }
    //logs results. need new function here to use DOM manipulation
    console.log('You chose: '+humanChoice+'. Your opponent chose: '+computerChoice)
    console.log('You '+result);
    console.log('Your score is: '+score[0]+'. Your opponents score is: '+score[1]);
    return(score);
}


function playGame(){
let score=[humanScore=0,computerScore=0];
console.log(getHumanChoice(score));
}
playGame()


