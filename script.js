console.log("Hello World")

//First way that i did it
function getComputerChoice(max) {
    let choice = Math.floor(Math.random() * max)
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
    let choice = Math.random() * 10;
    if (choice <= 3) {
        return "Rock";
    } else if (choice > 3 && choice <= 6) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoiceTwo());