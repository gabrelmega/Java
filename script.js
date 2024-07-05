console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

//second way that you can do it
function getComputerChoice(max) {
    const choice = Math.floor(Math.random() * max);
    if (choice === 0) {
        return "ROCK";
    } else if (choice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

//getting the human choice
function getHumanChoice() {
    const choice = prompt("Your choice");
    return choice;
}

//Let's play!!!
function playRound(humanChoice, computerChoice) {
    if (humanChoice.toUpperCase() === computerChoice) {
        console.log("It's a tie! Both choose the same item.");
    } else if (humanChoice.toUpperCase() === "ROCK") {
        if (computerChoice === "SCISSORS") {
            console.log("You won this round! Rock beats scissors.");
        } else if (computerChoice === "PAPER") {
            console.log("You lose this round. Paper beats rock.");
        }
    } else if (humanChoice.toUpperCase() === "PAPER") {
        if (computerChoice === "ROCK") {
            console.log("You won this round! Paper beats rock.");
        } else if (computerChoice === "SCISSORS") {
            console.log("You lose this round. Scissors beats paper.");
        }
    } else if (humanChoice.toUpperCase() === "SCISSORS") {
        if (computerChoice === "ROCK") {
            console.log("You lose this round! Rock beats scissors.");
        } else if (computerChoice === "PAPER") {
            console.log("You won this round! Scissors beats paper.");
        }
    } else {
        alert("You need to choose: Rock, Paper or Scissors.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

playRound(humanSelection, computerSelection);

console.log(computerSelection);