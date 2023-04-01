console.log(`Let's play Rock, Paper, Scissors!`);
let playerSelection;                                               /*This will contain player's choice */
let computerSelection;                                             /*This will contain computer's choice */

getPlayerChoice();
getComputerChoice();

function getPlayerChoice() {                                       
    playerSelection = prompt("Rock, Paper, Scissors");             /* ask user's input */
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors" && playerSelection != String) { /* if statement whether a user did not put the rock, paper, scissors */
        console.log(`Please pick one: rock, paper, scissors`);
    } else {
        console.log(`You picked ${playerSelection}`);
    }
}


function getComputerChoice() {                                  /* function that returns a random value of the computer */
    computerSelection = Math.floor(Math.random() * 3);          /* Math.random() function returns floating numbers between 0 and 1. Math.floor() function turn floating number into whole numbers */
    
    if (computerSelection === 0) {
        computerSelection = 'rock';
        console.log("I chose rock!")
    }
    if (computerSelection === 1) {
        computerSelection = 'paper';
        console.log("I chose paper!")
    }
    if (computerSelection === 2) {
        computerSelection = 'scissors';
        console.log("I chose scissors!")
    }
}