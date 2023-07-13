
function getRandomInteger() {
    return Math.floor(Math.random() * 3) +1;
}

function getComputerSelection() {
    const randomChoice = getRandomInteger();
    if (randomChoice === 1) {
      return 'rock';
    } else if (randomChoice === 2) {
      return 'paper';
    } else {
      return 'scissors';
    }
};


function playRound(playerSelection, computerSelection) {
    if (playerSelection ===  computerSelection) {
      return 'Draw!';
    } else if (playerSelection === "rock" && computerSelection == "scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection == "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection == "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
};
/*console.log('player: ' + playerSelection);
console.log('computer: ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));*/

// now the game with 5 rounds and declaration of winner

for (let i=1; i <= 5; i++) { 
let computerSelection = getComputerSelection()
let playerSelection = prompt('Enter either rock, paper or scissors').toLowerCase(); 
console.log('player: ' + playerSelection);
console.log('computer: ' + computerSelection);
console.log(i);
console.log(playRound(playerSelection, computerSelection));
}
