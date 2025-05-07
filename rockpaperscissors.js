
console.log("Hello World")

function getComputerChoice() {
    let number = Math.random();
    if (number < 1/3) {
        return "rock";
    } else if (number < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Choose your player: rock, paper or scissors")
}
