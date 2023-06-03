//This will contain player's choice
let playerSelection;      
//This will contain computer's choice                                         
let computerSelection;                                             
let playerScore = 0;
let computerScore = 0;
let gameLoop = 0;
let audio = true;

//start game button, hides underlying ui (scoreContainer, choice container)
const startGame = document.querySelector('#gameStart');
const choiceDiv = document.querySelector('#choiceContainer')
const divUi = document.querySelector('#ui');
const scoreDiv = document.querySelector('#playerComputerDiv')
const gameRound = document.querySelector('#round'); 
const gameResult = document.querySelector('#result');
const musicDiv = document.querySelector('#musicContainer')
divUi.removeChild(gameResult);
divUi.removeChild(choiceDiv);
divUi.removeChild(scoreDiv);
divUi.removeChild(gameRound);
divUi.removeChild(musicDiv);
startGame.addEventListener('click', function newGame (e) {
    divUi.removeChild(startGame);
    divUi.appendChild(gameRound);
    divUi.appendChild(scoreDiv);
    divUi.appendChild(choiceDiv);
    divUi.appendChild(musicDiv);
    document.getElementById("playerEmo").src = "svg/thinkingEmo.svg";
    document.getElementById("computerEmo").src = "svg/thinkingEmo.svg";
    document.getElementById("playerChoiceImg").src = "svg/cloudThinkingEmo.svg";
    document.getElementById("compChoiceImg").src = "svg/cloudThinkingEmo.svg";
    game();
    playAudio();
}) 



//Rock, Paper, Scissor Functions
const rock = choiceDiv.querySelector('#rock');
rock.addEventListener('click', (e) => {
    playerSelection = e.target.id
    document.getElementById("playerChoiceImg").src = "svg/Rock.svg";
    document.getElementById("compChoiceImg").src = "svg/Rock.svg";
    getComputerChoice();
    playRound(playerSelection, computerSelection)
    game();
})

const paper = choiceDiv.querySelector('#paper')
paper.addEventListener('click', (e) => {
    playerSelection = e.target.id
    document.getElementById("playerChoiceImg").src = "svg/Paper.svg";
    getComputerChoice();
    playRound(playerSelection, computerSelection)
    game();
})

const scissors = choiceDiv.querySelector('#scissors')
scissors.addEventListener('click', (e) => {
    playerSelection = e.target.id
    document.getElementById("playerChoiceImg").src = "svg/Scissors.svg";
    getComputerChoice();
    playRound(playerSelection, computerSelection)
    game();
} )  

//Computer choice
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

//Loop function
function playRound(playerSelection, computerSelection) {
        
    
    if (playerSelection == 'rock') {
        if (gameLoop < 5) {
            if (computerSelection == 'rock') {
                document.getElementById("playerEmo").src = "svg/thinkingEmo.svg";
                document.getElementById("computerEmo").src = "svg/thinkingEmo.svg";
            } else if (computerSelection == 'scissors') {
                document.getElementById("playerEmo").src = "svg/scoreEmo.svg";
                document.getElementById("computerEmo").src = "svg/noScoreEmo.svg";
                playerScore += 1;
            } else {
                document.getElementById("playerEmo").src = "svg/noScoreEmo.svg";
                document.getElementById("computerEmo").src = "svg/scoreEmo.svg";
                computerScore += 1;
            }
        } else {
            if (computerSelection == 'rock') {
                return;
            } else if (computerSelection == 'scissors') {
                playerScore += 1;
            } else {
                computerScore += 1;
            }

        }
    }

    if (playerSelection == 'scissors') {
        if (gameLoop < 5) {
            if (computerSelection == 'scissors') {
                document.getElementById("playerEmo").src = "svg/thinkingEmo.svg";
                document.getElementById("computerEmo").src = "svg/thinkingEmo.svg";
            } else if (computerSelection == 'paper') {
                document.getElementById("playerEmo").src = "svg/scoreEmo.svg";
                document.getElementById("computerEmo").src = "svg/noScoreEmo.svg";
                playerScore += 1;
            } else {
                document.getElementById("playerEmo").src = "svg/noScoreEmo.svg";
                document.getElementById("computerEmo").src = "svg/scoreEmo.svg";
                computerScore += 1;
            }
        } else {
            if (computerSelection == 'scissors') {
                return;
            } else if (computerSelection == 'paper') {
                playerScore += 1;
            } else {
                computerScore += 1;
            }

        }
    }

    if (playerSelection == 'paper') {
        if (gameLoop < 5) {
            if (computerSelection == 'paper') {
                document.getElementById("playerEmo").src = "svg/thinkingEmo.svg";
                document.getElementById("computerEmo").src = "svg/thinkingEmo.svg";
            } else if (computerSelection == 'rock') {
                document.getElementById("playerEmo").src = "svg/scoreEmo.svg";
                document.getElementById("computerEmo").src = "svg/noScoreEmo.svg";
                playerScore += 1;
            } else {
                document.getElementById("playerEmo").src = "svg/noScoreEmo.svg";
                document.getElementById("computerEmo").src = "svg/scoreEmo.svg";
                computerScore += 1;
            }
        } else {
            if (computerSelection == 'paper') {
                return;
            } else if (computerSelection == 'rock') {
                playerScore += 1;
            } else {
                computerScore += 1;
            }

        }
       
    }
    
}

//game() is the round loop
function game() {

    const retry = document.createElement('button');
    retry.setAttribute('style', 'font-size: 35px')
    

    //Game only loops 5 times. \
    if (gameLoop < 5) {
        gameLoop += 1;
        if (gameLoop < 5){
            gameRound.textContent = `Round ${gameLoop}`
           
        } else {
            gameRound.textContent = `Last round!`
        } 
    } else {
        if (playerScore > computerScore) {
            gameRound.textContent = `GAME END` ;
            divUi.appendChild(gameResult);
            gameResult.textContent = `You Win!`;
            document.getElementById('playerEmo').src = "svg/winEmo.svg";
            document.getElementById("computerEmo").src = "svg/loseEmo.svg";
            divUi.removeChild(choiceDiv);
            divUi.appendChild(retry);
            retry.textContent = `Try Again`;
            retry.addEventListener('click', (e) => {
                playerScore = 0;
                computerScore = 0;
                gameLoop = 0;
                document.getElementById("playerEmo").src = "svg/thinkingEmo.svg";
                document.getElementById("computerEmo").src = "svg/thinkingEmo.svg";
                document.getElementById("playerChoiceImg").src = "svg/cloudThinkingEmo.svg";
                document.getElementById("compChoiceImg").src = "svg/cloudThinkingEmo.svg";
                divUi.removeChild(retry);
                divUi.removeChild(gameResult);
                divUi.appendChild(choiceDiv);
                game();
            });
            
        } else if (playerScore == computerScore) {
            gameRound.textContent = `GAME END` ;
            divUi.appendChild(gameResult);
            gameResult.textContent = `It's a draw!`;
            document.getElementById('playerEmo').src = "svg/thinkingEmo.svg";
            document.getElementById("computerEmo").src = "svg/thinkingEmo.svg";
            divUi.removeChild(choiceDiv);
            divUi.appendChild(retry);
            retry.textContent = `Try Again`;
            retry.addEventListener('click', (e) => {
                playerScore = 0;
                computerScore = 0;
                gameLoop = 0;
                document.getElementById("playerEmo").src = "svg/thinkingEmo.svg";
                document.getElementById("computerEmo").src = "svg/thinkingEmo.svg";
                document.getElementById("playerChoiceImg").src = "svg/cloudThinkingEmo.svg";
                document.getElementById("compChoiceImg").src = "svg/cloudThinkingEmo.svg";
                divUi.removeChild(retry);
                divUi.removeChild(gameResult);
                divUi.appendChild(choiceDiv);
                game();
            });
       
        } else {
            gameRound.textContent = `GAME END` ;
            divUi.appendChild(gameResult);
            gameResult.textContent = `You Lose.`;
            document.getElementById('playerEmo').src = "svg/loseEmo.svg";
            document.getElementById("computerEmo").src = "svg/winEmo.svg";
            divUi.removeChild(choiceDiv);
            divUi.appendChild(retry);
            retry.textContent = `Try Again`;
            retry.addEventListener('click', (e) => {
                playerScore = 0;
                computerScore = 0;
                gameLoop = 0;
                document.getElementById("playerEmo").src = "svg/thinkingEmo.svg";
                document.getElementById("computerEmo").src = "svg/thinkingEmo.svg";
                document.getElementById("playerChoiceImg").src = "svg/cloudThinkingEmo.svg";
                document.getElementById("compChoiceImg").src = "svg/cloudThinkingEmo.svg";
                divUi.removeChild(retry);
                divUi.removeChild(gameResult);
                divUi.appendChild(choiceDiv);
                game();
            });
        }

    }
    
    //player and computer score
    const scorePlayer = scoreDiv.querySelector('#playerScore');
    const scoreComputer = scoreDiv.querySelector('#computerScore')
    scorePlayer.textContent = `${playerScore}`;
    scoreComputer.textContent = `${computerScore}`;
}



function playAudio() {
    let gameMusic = document.getElementById('musicFile');
    gameMusic.currentTime = 1;
    gameMusic.volume = 0.1;
    gameMusic.play()
}

function pauseAudio() {
    let gameMusic = document.getElementById('musicFile');
    gameMusic.pause();
}

const musicButton = musicDiv.querySelector('#musicButton');

musicButton.addEventListener('click', () => {

    if (audio == true) {
        musicButton.src = "./assets/Music/musicOff.svg";
        pauseAudio();
        console.log(audio);
        return audio = false;
    }

    if (audio == false) {
        musicButton.src = "./assets/Music/musicOn.svg";
        playAudio();
        console.log(audio);
        return audio = true;
    }
});



