console.log(`Let's play Rock, Paper, Scissors!`);
let playerChoice;                                               /*This will contain player's choice */
let computerChoice;                                             /* This will contain computer's choice */

playerSelect();

function playerSelect() {
    playerChoice = prompt("Rock, Paper, Scissors");
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice != "rock")  {
        console.log(`Please pick one: rock, paper, scissors`);
    } else {
        console.log(`You picked ${playerChoice}`);
    }
    
}
