const computerSelection


function getRandomInteger() {
    return Math.floor(Math.random() * 3) +1;
}

function getComputerChoice() {
    if (getRandomInteger() == 1) {computerSelection = "rock"};
    else if (getRandomInteger() == 2) {computerSelection = "paper"};
    else {computerSelection = "scissors"};
}
console.log(computerSelection)