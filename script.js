console.log(`Let's play Rock, Paper, Scissors!`);
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
                console.log(`You picked ${playerSelection}`);
                getComputerChoice();
            } 
        }    
    }

    function getComputerChoice() {                                  /* function that returns a random value of the computer */
        computerSelection = Math.floor(Math.random() * 3);          /* Math.random() function returns floating numbers between 0 and 1. Math.floor() function turn floating number into whole numbers */
        
        if (computerSelection === 0) {
            computerSelection = 'rock';
            console.log("Computer: I choose rock!")
            playRound(playerSelection, computerSelection);
        }
        if (computerSelection === 1) {
            computerSelection = 'paper';
            console.log("Computer: I choose paper!")
            playRound(playerSelection, computerSelection);
        }
        if (computerSelection === 2) {
            computerSelection = 'scissors';
            console.log("Computer: I choose scissors!")
            playRound(playerSelection, computerSelection);
        }
    }

    function playRound(playerSelection, computerSelection) {                            /*playRound function has two parameters. the input from playerChoice assigned a value on playerSelection. the same goes for computerChoice it creates a random value and place it on computerSelection.  */
        if (playerSelection == 'rock') {
            if (computerSelection == 'rock') {
                console.log('Computer: draw')
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else if (computerSelection == 'scissors') {
                console.log('Computer: I lose, you win')
                playerScore += 1;
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else {
                console.log('Computer: I win!')
                computerScore += 1;
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            }
        }

        if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') {
                console.log('Computer: draw')
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else if (computerSelection == 'scissors') {
                console.log('Computer: I lose, you win')
                playerScore += 1;
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else {
                console.log('Computer: I win!')
                computerScore += 1;
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            }
        }

        if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                console.log('Computer: draw')
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else if (computerSelection == 'scissors') {
                console.log('Computer: I lose, you win')
                playerScore += 1;
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            } else {
                console.log('Computer: I win!')
                computerScore += 1;
                console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
            }
        }

    }
    
    if (gameLoop < 5) {
        gameLoop += 1;
        if (gameLoop < 5){
            console.log(`type game() to play round ${gameLoop}`)
        } else {
            console.log(`type game() to play last round!`)
        } 
    } else {
        console.log(`GAME END.`)
        console.log(`Player score: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)

        if (playerScore > computerScore) {
            return console.log(`Congratulations! Player won!`);
        } else if (playerScore == computerScore) {
            return console.log(`It's a draw! Press F5 try again!`);
        } else {
            console.log(`Game over, you lose. Try again!`);
           return console.log(`press F5 to try again!`);
        }
    }

}