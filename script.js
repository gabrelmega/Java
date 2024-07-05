console.log("Hello World")

//First way that i did it
function getComputerChoice(max) {
    const choice = Math.floor(Math.random() * max)
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice(3))

//second way that you can do it
function getComputerChoiceTwo() {
    const choice = Math.random() * 10;
    if (choice <= 3) {
        return "Rock";
    } else if (choice > 3 && choice <= 6) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoiceTwo());

//getting the human choice
function getHumanChoice() {
    const choice = prompt("Your choice")
    if (choice == "rock" || choice == "Rock") {
        return "Rock";
    } else if (choice == "paper" || choice == "Paper") {
        return "Paper";
    } else if (choice == "scissors" || choice == "Scissors") {
        return "Scissors";
    } else {
        alert("You need to choose Rock, Paper or Scissors.");
        getHumanChoice();
    }
}
console.log(getHumanChoice())