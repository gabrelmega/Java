console.log("Hello World")

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
function playGame() {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toUpperCase() === computerChoice) {
            console.log("It's a tie! Both choose the same item.");
        } else if (humanChoice.toUpperCase() === "ROCK") {
            if (computerChoice === "SCISSORS") {
                console.log("You won this round! Rock beats scissors.");
                humanScore += 1
            } else if (computerChoice === "PAPER") {
                console.log("You lose this round. Paper beats rock.");
                computerScore += 1
            }
        } else if (humanChoice.toUpperCase() === "PAPER") {
            if (computerChoice === "ROCK") {
                console.log("You won this round! Paper beats rock.");
                humanScore += 1
            } else if (computerChoice === "SCISSORS") {
                console.log("You lose this round. Scissors beats paper.");
                computerScore += 1
            }
        } else if (humanChoice.toUpperCase() === "SCISSORS") {
            if (computerChoice === "ROCK") {
                console.log("You lose this round! Rock beats scissors.");
                computerScore += 1
            } else if (computerChoice === "PAPER") {
                console.log("You won this round! Scissors beats paper.");
                humanScore += 1
            }
        } else {
            alert("You need to choose: Rock, Paper or Scissors.");
            playRound(getHumanChoice(), getComputerChoice());
        }
    }
    for (let i = 0; i<5; i++) {
        const humanSelection = getHumanChoice()
        const computerSlelection = getComputerChoice(3)
        playRound (humanSelection, computerSlelection)
    }

    if (humanScore > computerScore) {
        console.log("YOU WIN!!!")
    } else if (computerScore > humanScore) {
        console.log("YOU LOSE.")
    } else {
        console.log("It's a tie!")
    }
}

playGame()