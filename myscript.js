
function getRandomInteger() {
    return Math.floor(Math.random() * 3) +1;
}

function computerSelection() {
    const randomChoice = getRandomInteger();
    if (randomChoice === 1) {
      return 'rock';
    } else if (randomChoice === 2) {
      return 'paper';
    } else {
      return 'scissors';
    }
};

let playerSelection = prompt('Enter either rock, paper or scissors').toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection ==  computerSelection) {
      return 'draw';
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return 'you win';
    }
}
console.log('player: ' + playerSelection);
console.log('computer: ' + computerSelection());

console.log(playRound(playerSelection, computerSelection()));