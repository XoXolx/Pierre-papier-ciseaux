console.log("Hello world")

// computer choice
function getComputerChoice() {
    const randomValue = Math.random(); // Generates a random number between 0 and 1
    if (randomValue < 0.33) {
        return "rock";
    } else if (randomValue < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Test the function
console.log("Computer choice:", getComputerChoice());


//human Choice

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please choose rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

// Test the function
console.log("Human choice:", getHumanChoice());


// score save

let humanScore = 0;
let computerScore = 0;

// rule and condition to win or loose

function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
    }
}

// Example usage:
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);


// rule for all game
function playGame() {
    for (let i = 0; i < 5; i++) { // Play 5 rounds
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! The computer won the game.");
    } else {
        console.log("The game ended in a tie!");
    }
}

// Start the game
playGame();


