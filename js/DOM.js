document.addEventListener("DOMContentLoaded", function () {
    let attempts = 6;
    let userGuessingWord = "dog";
    let wordToGuess = "";
    let guessedLetters = [];

    const wordArray = ["apple", "banana", "chocolate", "dog"];

    let cpuGuessIndex = Math.floor(Math.random() * wordArray.length);
    let cpuGuessedWord = wordArray[cpuGuessIndex];
    console.log("CPU Guessed Word: " + cpuGuessedWord);

    // Initialize the wordToGuess with underscores
    for (let i = 0; i < cpuGuessedWord.length; i++) {
        wordToGuess += "_ ";
    }

    // Display the initial state of the word
    updateWordDisplay();

    // Display initial attempts
    updateAttemptsDisplay();

    document.getElementById("letterForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form behavior (page refresh)
        checkGuess();
    });

    document.getElementById("playAgainBtn").addEventListener("click", function () {
        resetGame();
    });

    function updateWordDisplay() {
        document.getElementById("wordToGuess").textContent = wordToGuess;
    }

    function updateAttemptsDisplay() {
        document.getElementById("attempts").textContent = attempts;
    }

    function checkGuess() {
        const inputValue = document.getElementById("letterInput").value.toLowerCase();

        // Check if the letter is included in the cpuGuessedWord
        if (cpuGuessedWord.toLowerCase().includes(inputValue)) {
            // Update the guessedLetters array
            guessedLetters.push(inputValue);

            // Update the wordToGuess with the correctly guessed letters
            updateWordWithGuesses();

            // Check if the word is completely guessed
            if (!wordToGuess.includes("_")) {
                updateFeedback("text-success", "Congratulations! You guessed the word!");
                resetGame();
                return;
            }

            updateFeedback("text-info", "Correct guess! Keep going.");
        } else {
            // Incorrect guess
            attempts--;

            // Check if all lives are gone
            if (attempts === 0) {
                updateFeedback("text-danger", "No more attempts left. Game over! The correct word was: " + cpuGuessedWord);
                revealWord();
                resetGame();
            } else {
                updateFeedback("text-warning", "Incorrect guess! Attempts left: " + attempts);
            }
        }

        // Clear the input field after processing the guess
        document.getElementById("letterInput").value = "";

        // Update displays
        updateWordDisplay();
        updateAttemptsDisplay();
    }

    function updateWordWithGuesses() {
        // Update the wordToGuess with the correctly guessed letters
        wordToGuess = "";
        for (let i = 0; i < cpuGuessedWord.length; i++) {
            const currentLetter = cpuGuessedWord[i].toLowerCase();
            if (guessedLetters.includes(currentLetter)) {
                // If the letter has been guessed, reveal it
                wordToGuess += currentLetter + " ";
            } else {
                // If the letter has not been guessed, show an underscore
                wordToGuess += "_ ";
            }
        }

        // Display the updated word
        updateWordDisplay();
    }

    function resetGame() {
        attempts = 6;
        guessedLetters = [];
        wordToGuess = "";

        // Choose a new word for the CPU to guess
        cpuGuessIndex = Math.floor(Math.random() * wordArray.length);
        cpuGuessedWord = wordArray[cpuGuessIndex];
        console.log("CPU Guessed Word: " + cpuGuessedWord);

        // Initialize the wordToGuess with underscores
        for (let i = 0; i < cpuGuessedWord.length; i++) {
            wordToGuess += "_ ";
        }

        // Display the initial state of the word
        updateWordDisplay();
        updateAttemptsDisplay();

        // Clear feedback
        updateFeedback("", "");
        
        // Hide the word span
        document.getElementById("correctWord").style.display = "none";
    }

    function updateFeedback(className, message) {
        document.getElementById("feedback").className = className;
        document.getElementById("feedback").textContent = message;
    }

    function revealWord() {
        // Display the correct word when attempts are exhausted
        document.getElementById("correctWord").textContent = `The correct word was: ${cpuGuessedWord}`;
        document.getElementById("correctWord").style.display = "block";
    }
});
