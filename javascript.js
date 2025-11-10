const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");

const playerRock = document.querySelector('#playerRock');
const playerPaper = document.querySelector('#playerPaper');
const playerScissors = document.querySelector('#playerScissors');

const computerPicture = document.querySelector('#computerPicture');

const roundDiv = document.createElement("div");
const roundResult = document.createElement("p");
const endDiv = document.createElement("div");
const endResult = document.createElement("h2");
const againBttn = document.createElement("button");

roundDiv.appendChild(roundResult);
document.querySelector(".playerChoice").after(roundDiv); //Need to see if this is where I want it or should I move it? and how to take it out?
endDiv.appendChild(endResult);
document.querySelector('.score').appendChild(endDiv);
document.querySelector('.score').appendChild(againBttn);
againBttn.classList.add('hidden');

let score=[humanScore = 0,computerScore = 0];

function getHumanChoice(score){

    playerRock.onclick = () => score = playRound('rock', score);
    playerPaper.onclick = () => score = playRound('paper', score);
    playerScissors.onclick = () => score = playRound('scissors', score);
}

function getComputerChoice() {
    let randomNum = Math.random();//random number from 0 to 1
    let choice = "";
    if (randomNum < 1/3) {
        choice = "rock";
    } else if (randomNum < 2/3) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return(choice);
    //Need to add a change of picture for computer choice by changing source attribute, need to reset it as well at the start
}

function gameEnd(score){
    //hide all elements before
    playerRock.classList.add('hidden');
    playerPaper.classList.add('hidden');
    playerScissors.classList.add('hidden');
    computerPicture.classList.remove('hidden')
    roundDiv.classList.add('hidden')

    if (score[0]>score[1]){
        endResult.textContent = "You Won!";
    } else {
        endResult.textContent = "You Lost!";
    }
    againBttn.classList.remove('hidden');
    againBttn.textContent="Try Again?";
    

    againBttn.onclick = () => reset();
    //computerPicture.onclick = () => e = reset();
}
function reset() {

    playerRock.classList.remove('hidden');
    playerPaper.classList.remove('hidden');
    playerScissors.classList.remove('hidden');
    computerPicture.classList.remove('hidden')
    roundResult.textContent='';
    roundDiv.classList.remove('hidden');
    againBttn.classList.add('hidden');
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    getHumanChoice([0,0]);
}

function playRound(humanChoice, score){
    let computerChoice = getComputerChoice();
    let result='';

    if (humanChoice == computerChoice){
        result = 'Tie';
    } else if (((humanChoice=="rock")&&(computerChoice=="scissors"))||((humanChoice=="paper")&&(computerChoice=="rock"))||((humanChoice=="scissors")&&(computerChoice=="paper"))){
        result='Win';
        score[0] ++;
   
    }   else {
        result='Lose';
        score[1] ++;

    }
    playerScoreDisplay.textContent = score[0];
    computerScoreDisplay.textContent = score[1];
    showScore(result,humanChoice,computerChoice)
    //Look for option to use max score instead of OR scenario
    if (score[0]>=3||score[1]>=3){
        gameEnd(score)
    }

    return(score);
}
function showScore(result,humanChoice,computerChoice){


    roundResult.textContent = "You chose: "+humanChoice +".  Your oponent chose: "+computerChoice+". You "+result;

}

getHumanChoice(score);

