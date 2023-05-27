console.log(`Let's play Rock, Paper, Scissors!`);
console.log(`Type game() to play`)
//This will contain player's choice
let playerSelection;      
//This will contain computer's choice                                         
let computerSelection;                                             
let playerScore = 0;
let computerScore = 0;
let gameLoop = 0;

//start game button, hides underlying ui (scoreContainer, choice container)
const startGame = document.querySelector('#gameStart');
const choiceDiv = document.querySelector('#choiceContainer')
const divUi = document.querySelector('#ui');
const scoreDiv = document.querySelector('#playerComputerDiv')
const gameRound = document.querySelector('#round'); 
divUi.removeChild(choiceDiv)
divUi.removeChild(scoreDiv)
divUi.removeChild(gameRound)
startGame.addEventListener('click', (e) => {
    divUi.removeChild(startGame);
    divUi.appendChild(gameRound);
    divUi.appendChild(scoreDiv);
    divUi.appendChild(choiceDiv);
    document.getElementById("playerEmo").src = "svg/thinkingEmo.svg";
    document.getElementById("computerEmo").src = "svg/thinkingEmo.svg";
    document.getElementById("playerChoiceImg").src = "svg/cloudThinkingEmo.svg";
    document.getElementById("compChoiceImg").src = "svg/cloudThinkingEmo.svg";
    game();
}) 



//Rock, Paper, Scissor Functions
const rock = choiceDiv.querySelector('#rock');
rock.addEventListener('click', (e) => {
    playerSelection = e.target.id
    console.log(playerSelection)
    document.getElementById("playerChoiceImg").src = "svg/Rock.svg";
    document.getElementById("compChoiceImg").src = "svg/Rock.svg";
    getComputerChoice();
    playRound(playerSelection, computerSelection)
    game();
})

const paper = choiceDiv.querySelector('#paper')
paper.addEventListener('click', (e) => {
    playerSelection = e.target.id
    console.log(playerSelection)
    document.getElementById("playerChoiceImg").src = "svg/Paper.svg";
    getComputerChoice();
    playRound(playerSelection, computerSelection)
    game();
})

const scissors = choiceDiv.querySelector('#scissors')
scissors.addEventListener('click', (e) => {
    playerSelection = e.target.id
    console.log(playerSelection)
    document.getElementById("playerChoiceImg").src = "svg/Scissors.svg";
    getComputerChoice();
    playRound(playerSelection, computerSelection)
    game();
} )  

function getComputerChoice() {                                 
    computerSelection = Math.floor(Math.random() * 3);         
    
    if (computerSelection === 0) {
        document.getElementById("compChoiceImg").src = "svg/Rock.svg";
        computerSelection = 'rock';
    }
    if (computerSelection === 1) {
        document.getElementById("compChoiceImg").src = "svg/Paper.svg";
        return computerSelection = 'paper';
    }
    if (computerSelection === 2) {
        document.getElementById("compChoiceImg").src = "svg/Scissors.svg";
        return computerSelection = 'scissors';
    }
}

//Playround function
function playRound(playerSelection, computerSelection) {
        
    
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            document.getElementById("playerEmo").src = "svg/thinkingEmo.svg";
            document.getElementById("computerEmo").src = "svg/thinkingEmo.svg";
            console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n DRAW!`)
            console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
        } else if (computerSelection == 'scissors') {
            document.getElementById("playerEmo").src = "svg/scoreEmo.svg";
            document.getElementById("computerEmo").src = "svg/noScoreEmo.svg";
            console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU WIN!`)
            playerScore += 1;
            console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
        } else {
            document.getElementById("playerEmo").src = "svg/noScoreEmo.svg";
            document.getElementById("computerEmo").src = "svg/scoreEmo.svg";
            console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU LOSE!`)
            computerScore += 1;
            console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            document.getElementById("playerEmo").src = "svg/thinkingEmo.svg";
            document.getElementById("computerEmo").src = "svg/thinkingEmo.svg";
            console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n DRAW!`)
            console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
        } else if (computerSelection == 'paper') {
            document.getElementById("playerEmo").src = "svg/scoreEmo.svg";
            document.getElementById("computerEmo").src = "svg/noScoreEmo.svg";
            console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU WIN!`)
            playerScore += 1;
            console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
        } else {
            document.getElementById("playerEmo").src = "svg/noScoreEmo.svg";
            document.getElementById("computerEmo").src = "svg/scoreEmo.svg";
            console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU LOSE!`)
            computerScore += 1;
            console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
        }
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            document.getElementById("playerEmo").src = "svg/thinkingEmo.svg";
            document.getElementById("computerEmo").src = "svg/thinkingEmo.svg";
            console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n DRAW!`)
            console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
        } else if (computerSelection == 'rock') {
            document.getElementById("playerEmo").src = "svg/scoreEmo.svg";
            document.getElementById("computerEmo").src = "svg/noScoreEmo.svg";
            console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU WIN!`)
            playerScore += 1;
            console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
        } else {
            document.getElementById("playerEmo").src = "svg/noScoreEmo.svg";
            document.getElementById("computerEmo").src = "svg/scoreEmo.svg";
            console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU LOSE!`)
            computerScore += 1;
            console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
        }
    }
    
}

//game() is the round loop
function game() {
             
    //Game only loops 5 times. 
    if (gameLoop < 5) {
        gameLoop += 1;
        if (gameLoop < 5){
            gameRound.textContent = `Round ${gameLoop}`
            console.log(`Round ${gameLoop}`)
        } else {
            gameRound.textContent = `Last round!`
            console.log(`Last round!`)
        } 
    } else {
        if (playerScore > computerScore) {
            return console.log(`GAME END. \n\n Player score: ${playerScore} \n Computer score: ${computerScore} \n\n Congratulations! Player won! \n\n Press F5 to try again!`) 
        } else if (playerScore == computerScore) {
            return console.log(`GAME END. \n\n Player score: ${playerScore} \n Computer score: ${computerScore} \n\n It's a draw! \n\n Press F5 to try again!`)
        } else {
            return console.log(`GAME END. \n\n Player score: ${playerScore} \n Computer score: ${computerScore} \n\n You lose! \n\n Press F5 to try again!`)
        }
    }
    
//player and computer score
const scorePlayer = scoreDiv.querySelector('#playerScore');
const scoreComputer = scoreDiv.querySelector('#computerScore')
scorePlayer.textContent = `${playerScore}`;
scoreComputer.textContent = `${computerScore}`;

}

