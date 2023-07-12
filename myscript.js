
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

console.log(computerSelection());
console.log(playerSelection);