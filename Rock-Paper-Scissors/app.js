let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById('user_score');
const computerScoreSpan = document.getElementById('computer_score');
const userChoiceSpan = document.getElementById('user_choice');
const computerChoiceSpan = document.getElementById('comp_choice');
const resultSpan = document.getElementById('result');

const choices = document.querySelectorAll('.weapons button');
const choicesArr = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
    choice.addEventListener('click', (event) => {
        const userChoice = event.target.closest('button').id;
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);

        userChoiceSpan.innerHTML = `You chose: ${userChoice}`;
        computerChoiceSpan.innerHTML = `Computer chose: ${computerChoice}`;
        resultSpan.innerHTML = result;

        updateScore(result);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choicesArr[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function updateScore(result) {
    if (result === "You win!") {
        userScore++;
    } else if (result === "Computer wins!") {
        computerScore++;
    }

    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}
