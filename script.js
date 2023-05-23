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
const scoreDiv = document.querySelector('#scoreContainer')
const gameRound = document.querySelector('#round'); 
divUi.removeChild(choiceDiv)
divUi.removeChild(scoreDiv)
startGame.addEventListener('click', (e) => {
    divUi.removeChild(startGame);
    divUi.appendChild(scoreDiv);
    divUi.appendChild(choiceDiv);
    game();
}) 



//Rock, Paper, Scissor Functions
const rock = choiceDiv.querySelector('#rock');
rock.addEventListener('click', (e) => {
    playerSelection = e.target.id
    console.log(playerSelection)
    game();
})

const paper = choiceDiv.querySelector('#paper')
paper.addEventListener('click', (e) => {
    playerSelection = e.target.id
    console.log(playerSelection)
    game();
})

const scissors = choiceDiv.querySelector('#scissors')
scissors.addEventListener('click', (e) => {
    playerSelection = e.target.id
    console.log(playerSelection)
    game();
} )  


//game function
function game() {
             
    //Game only loops 5 times. 
    if (gameLoop < 5) {
        gameLoop += 1;
        if (gameLoop < 5){
            console.log(`Round ${gameLoop}`)
        } else {
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

    console.log(`Rock, paper, scissors`)

    //get computer choice function
    function getComputerChoice() {                                 
        computerSelection = Math.floor(Math.random() * 3);         
        
        if (computerSelection === 0) {
            computerSelection = 'rock';
            playRound(playerSelection, computerSelection);
        }
        if (computerSelection === 1) {
            computerSelection = 'paper';
            playRound(playerSelection, computerSelection);
        }
        if (computerSelection === 2) {
            computerSelection = 'scissors';
            playRound(playerSelection, computerSelection);
        }
    }

    getComputerChoice();

    //playRound() compares player's choice to the computer's choice
    function playRound(playerSelection, computerSelection) { 
        if (playerSelection == 'rock') {
            if (computerSelection == 'rock') {
                console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n DRAW!`)
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else if (computerSelection == 'scissors') {
                console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU WIN!`)
                playerScore += 1;
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else {
                console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU LOSE!`)
                computerScore += 1;
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            }
        }

        if (playerSelection == 'scissors') {
            if (computerSelection == 'scissors') {
                console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n DRAW!`)
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else if (computerSelection == 'paper') {
                console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU WIN!`)
                playerScore += 1;
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else {
                console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU LOSE!`)
                computerScore += 1;
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            }
        }

        if (playerSelection == 'paper') {
            if (computerSelection == 'paper') {
                console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n DRAW!`)
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else if (computerSelection == 'rock') {
                console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU WIN!`)
                playerScore += 1;
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else {
                console.log(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU LOSE!`)
                computerScore += 1;
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            }
        }

    }
    
//player and computer score
const scorePlayer = scoreDiv.querySelector('#playerScore');
const scoreComputer = scoreDiv.querySelector('#computerScore')
scorePlayer.textContent = `${playerScore}`;
scoreComputer.textContent = `${computerScore}`;

}

