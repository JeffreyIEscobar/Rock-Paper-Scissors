document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-button");
    const resultText = document.getElementById("result-text");

    // Radio buttons for user choices
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    playButton.addEventListener("click", function() {
        // Check which radio button is selected
        let userChoice = "";
        if (rockButton.checked) {
            userChoice = "Rock";
        } else if (paperButton.checked) {
            userChoice = "Paper";
        } else if (scissorsButton.checked) {
            userChoice = "Scissors";
        } else {
            resultText.textContent = "Please select an option."; // Handle no selection
            return;
        }

        // Define an array of choices
        const choices = ["Rock", "Paper", "Scissors"];
        
        // Generate a random computer choice
        const randomIndex = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[randomIndex];

        // Determine the winner
        let result = "";
        if (userChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")
        ) {
            result = "You win!";
        } else {
            result = "Computer wins!";
        }

        // Display the result
        resultText.textContent = `Computer chose: ${computerChoice}. ${result}`;
        
    });
});
