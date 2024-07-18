console.log("Hello World");

let playerScore = 0;
let computerScore = 0;

const btn = document.querySelectorAll("#btn");
const roundWinner = document.querySelector("#roundWinner");
const paraRound = document.querySelector("#winnerPara");
const player = document.querySelector("#playerUI");
const computer = document.querySelector("#computerUI");
const winnerContainer = document.querySelector("#winnerContainer");
const btnContainer = document.querySelector("#btnContainer");

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

btn.forEach((btn) => {
    if(btn.className) {
        btn.addEventListener("click", () => {
            playRound(btn.className, getComputerChoice(3));
        });
    }
});

function gameOver() {
    btnContainer.innerHTML = '';
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        paraRound.textContent = "It's a tie! Both choose the same item.";
    } else if (playerChoice === "ROCK") {
        if (computerChoice === "SCISSORS") {
            paraRound.textContent = "You won this round! Rock beats scissors.";
            playerScore++
            player.textContent = `Player Score ${playerScore} `;
        } else if (computerChoice === "PAPER") {
            paraRound.textContent = "You lose this round. Paper beats rock.";
            computerScore++
            computer.textContent = `Computer Score ${computerScore}`;
        }
    } else if (playerChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            paraRound.textContent = "You won this round! Paper beats rock.";
            playerScore++
            player.textContent = `Player Score ${playerScore} `;
        } else if (computerChoice === "SCISSORS") {
            paraRound.textContent = "You lose this round. Scissors beats paper.";
            computerScore++
            computer.textContent = `Computer Score ${computerScore}`;
        }
    } else if (playerChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
            paraRound.textContent = "You lose this round! Rock beats scissors.";
            computerScore++
            computer.textContent = `Computer Score ${computerScore}`;
        } else if (computerChoice === "PAPER") {
            paraRound.textContent = "You won this round! Scissors beats paper.";
            playerScore++
            player.textContent = `Player Score ${playerScore} `;
        }
    }
    if (playerScore == 5) {
        const playerWon = document.createElement("h1");
        const message = document.createElement("p");
        playerWon.textContent = "YOU WON!!!! CONGRATULATIONS!!!";
        message.textContent = "You already won, so don't play it again. If you want to play again, then refresh the page... No reset button for U >:("
        winnerContainer.appendChild(playerWon);
        winnerContainer.appendChild(message);
        gameOver()
    }   else if (computerScore == 5) {
        const computerWon = document.createElement("h1");
        const looserMessage = document.createElement("p");
        computerWon.textContent = "You loose. Better luck next time.";
        looserMessage.textContent = "You lost the game. I would made a reset button. But the Assiggment didn't tell me to do. So no reset button for you >:(";
        winnerContainer.appendChild(computerWon);
        winnerContainer.appendChild(looserMessage);
        gameOver()
    }
}

