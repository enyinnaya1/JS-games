var computerChoiceDisplay = document.getElementById("computer-choice");
var userChoiceDisplay = document.getElementById("user-choice");
var result = document.getElementById("result");
let userChoice;
let computerChoice;
let outcome;

// console.log(result, userChoice, computerChoice);

const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateRandomNumber();
    getResult();

}));


function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    if (randomNumber == 1) {
        computerChoice = "rock";
    }
    
    if (randomNumber == 2) {
        computerChoice = "paper";
    }
    
    if (randomNumber == 3) {
        computerChoice = "scissors";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
    console.log(computerChoice);
}

function getResult() {
    // draw 
    if (computerChoice === userChoice) {
        outcome = "We have a tie!"; 
    }

    // first case
    if (computerChoice === "rock" && userChoice === "paper") {
        outcome = "Paper covers rock... you win!"; 
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        outcome = "Paper covers rock... computer wins!"; 
    }

    //second case
    if (computerChoice === "rock" && userChoice === "scissors") {
        outcome = "Rock crushes scissors... computer wins!"; 
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        outcome = "Rock crushes scissors... you win!"; 
    }

    //third case
    if (computerChoice === "scissors" && userChoice === "paper") {
        outcome = "Scissors cuts paper... Goooo skynet!"; 
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        outcome = "Scissors cuts paper... you win!"; 
    }

    //display result
    result.innerHTML = outcome;

}


result.style = `
                color: green;
                font-weight: 600;
                font-family: cursive;
                font-size: .9rem;
                background: antiquewhite;
                padding: 10px;
                border-radius: 5px;
                `