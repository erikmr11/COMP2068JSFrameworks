const prompt = require('prompt-sync')();
const userSelection = prompt('Choose ROCK, PAPER, or SCISSORS: '); 

prompt.start();

prompt.get(['choice'], function (err, result) {
    if (err) { return onErr(err); }

    const userSelection = result.choice.toUpperCase();
    const computerSelection = generateComputerSelection();

    console.log(`User Selection: ${userSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);

    const resultMessage = determineWinner(userSelection, computerSelection);
    console.log(resultMessage);
});

function onErr(err) {
    console.log(err);
    return 1;
}

function generateComputerSelection() {
    const randomNum = Math.random();
    if (randomNum <= 0.34) {
        return 'PAPER';
    } else if (randomNum <= 0.67) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (
        (user === 'ROCK' && computer === 'SCISSORS') ||
        (user === 'PAPER' && computer === 'ROCK') ||
        (user === 'SCISSORS' && computer === 'PAPER')
    ) {
        return 'User Wins!';
    } else {
        return 'Computer Wins!';
    }
}
