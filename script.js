console.log(`Let's play Rock, Paper, Scissors!`);
let playerSelection;                                               /*This will contain player's choice */
let computerSelection;                                             /*This will contain computer's choice */
let round;
let playerScore;
let computerScore;

getPlayerChoice();

function getPlayerChoice() {                                       
    playerSelection = prompt("Rock, Paper, Scissors");             /* ask user's input */
    if (playerSelection == null) {
        console.log(`type: getPlayerChoice() to play the game.`)
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
        return computerSelection;
    }
    if (computerSelection === 1) {
        computerSelection = 'paper';
        console.log("Computer: I choose paper!")
        return computerSelection;
    }
    if (computerSelection === 2) {
        computerSelection = 'scissors';
        console.log("Computer: I choose scissors!")
        return computerSelection;
    }
}

playRound(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            console.log('Computer: draw')
        } else if (computerSelection == 'scissors') {
            console.log('Computer: I lose, you win')
        } else {
            console.log('Computer: I win!')
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('Computer: draw')
        } else if (computerSelection == 'scissors') {
            console.log('Computer: I lose, you win')
        } else {
            console.log('Computer: I win!')
        }
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('Computer: draw')
        } else if (computerSelection == 'scissors') {
            console.log('Computer: I lose, you win')
        } else {
            console.log('Computer: I win!')
        }
    }

}

