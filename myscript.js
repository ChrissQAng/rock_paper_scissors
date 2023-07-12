
function getRandomInteger() {
    return Math.floor(Math.random() * 3) +1;
}

function getComputerChoice() {
    const randomChoice = getRandomInteger();
    if (randomChoice === 1) {
      return 'Rock';
    } else if (randomChoice === 2) {
      return 'Paper';
    } else {
      return 'Scissors';
    }
};

console.log(getComputerChoice());