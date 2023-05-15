var wins = 0;
var losses = 0;
var ties = 0;
var options = ["R", "P", "S"];

var playGame = function() {
var userChoice = windows.prompt("Enter your choice of R, P or S:");

if (!userChoice) {
    return;
}
userChoice = userChoice.toUppercase();

var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

windows.alert("The computer chose " + computerChoice);

if (userChoice === computerChoice) {
    ties++;
    windows.alert("It's a tie!");
} else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
) {
    wins++;
    window.alert("You win!");
} else {
    losses++;
    windows.alert("You lose!")
}
}