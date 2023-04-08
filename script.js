console.log(`Let's play Rock, Paper, Scissors!`);
console.log(`Type game() to play`)
let playerSelection;                                               /*This will contain player's choice */
let computerSelection;                                             /*This will contain computer's choice */
let playerScore = 0;
let computerScore = 0;
let gameLoop = 1;

game()

function game() {

    getPlayerChoice();
    function getPlayerChoice() {                                       
        playerSelection = prompt(`Round ${gameLoop}:   Rock, Paper, Scissors`);             /* ask user's input */
        if (playerSelection == null) {
            console.log(`type: game() to play the game.`)
            gameLoop = gameLoop -1;
        } else {
            playerSelection = playerSelection.toLowerCase();
                if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors" && playerSelection != String) { /* if statement whether a user did not put the rock, paper, scissors */
                getPlayerChoice();
            }   else {
                getComputerChoice();
            } 
        }    
    }

    function getComputerChoice() {                                  /* function that returns a random value of the computer */
        computerSelection = Math.floor(Math.random() * 3);          /* Math.random() function returns floating numbers between 0 and 1. Math.floor() function turn floating number into whole numbers */
        
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

    function playRound(playerSelection, computerSelection) {                            /*playRound function has two parameters. the input from playerChoice assigned a value on playerSelection. the same goes for computerChoice it creates a random value and place it on computerSelection.  */
        if (playerSelection == 'rock') {
            if (computerSelection == 'rock') {
                window.alert(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n DRAW!`)
                window.alert(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else if (computerSelection == 'scissors') {
                window.alert(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU WIN!`)
                playerScore += 1;
                window.alert(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else {
                window.alert(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU LOSE!`)
                computerScore += 1;
                window.alert(`Player: ${playerScore} vs Computer: ${computerScore}`)
            }
        }

        if (playerSelection == 'scissors') {
            if (computerSelection == 'scissors') {
                window.alert(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n DRAW!`)
                window.alert(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else if (computerSelection == 'paper') {
                window.alert(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU WIN!`)
                playerScore += 1;
                window.alert(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else {
                window.alert(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU LOSE!`)
                computerScore += 1;
                window.alert(`Player: ${playerScore} vs Computer: ${computerScore}`)
            }
        }

        if (playerSelection == 'paper') {
            if (computerSelection == 'paper') {
                window.alert(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n DRAW!`)
                window.alert(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else if (computerSelection == 'rock') {
                window.alert(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU WIN!`)
                playerScore += 1;
                window.alert(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else {
                window.alert(`You picked ${playerSelection} \n\n Computer: I choose ${computerSelection} \n\n YOU LOSE!`)
                computerScore += 1;
                window.alert(`Player: ${playerScore} vs Computer: ${computerScore}`)
            }
        }

    }
    
    if (gameLoop < 5) {
        gameLoop += 1;
        if (gameLoop < 5){
            window.alert(`Round ${gameLoop}`)
            game()
        } else {
            window.alert(`Last round!`)
            game()
        } 
    } else {
        if (playerScore > computerScore) {
            window.alert(`GAME END. \n\n Player score: ${playerScore} \n Computer score: ${computerScore} \n\n Congratulations! Player won! \n\n Press F5 to try again!`) 
        } else if (playerScore == computerScore) {
            window.alert(`GAME END. \n\n Player score: ${playerScore} \n Computer score: ${computerScore} \n\n It's a draw! \n\n Press F5 to try again!`)
        } else {
            window.alert(`GAME END. \n\n Player score: ${playerScore} \n Computer score: ${computerScore} \n\n You lose! \n\n Press F5 to try again!`)
        }
    }

}