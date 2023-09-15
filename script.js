document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-button");
    const resultText = document.getElementById("result-text");

    playButton.addEventListener("click", function() {
        // Define an array of choices
        const choices = ["Rock", "Paper", "Scissors"];
        
        // Generate a random computer choice
        const randomIndex = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[randomIndex];

        // Get the user's choice (you can replace this with user input)
        const userChoice = "Rock";

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
