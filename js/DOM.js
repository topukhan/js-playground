document.addEventListener("DOMContentLoaded", function () {
    let attempts = 3;
    let wordToGuess = "";
    let guessedLetters = new Set();

    const wordArray = [
        "sun",
        "rain",
        "wind",
        "tree",
        "bird",
        "flower",
        "house",
        "car",
        "book",
        "game",
        "laugh",
        "smile",
        "dance",
        "sing",
        "eat",
        "sleep",
        "love",
        "friend",
        "happy",
        "sad",
    ];

    let cpuGuessIndex = Math.floor(Math.random() * wordArray.length);
    let cpuGuessedWord = wordArray[cpuGuessIndex];

    // Initialize the wordToGuess with underscores
    for (let i = 0; i < cpuGuessedWord.length; i++) {
        wordToGuess += "_ ";
    }

    updateWordDisplay();

    updateAttemptsDisplay();

    document
        .getElementById("letterForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            checkGuess();
        });

    document
        .getElementById("playAgainBtn")
        .addEventListener("click", function () {
            resetGame();
        });

    function updateWordDisplay() {
        document.getElementById("wordToGuess").textContent = wordToGuess;
    }

    function updateAttemptsDisplay() {
        document.getElementById("attempts").textContent = attempts;
    }

    function checkGuess() {
        const inputValue = document
            .getElementById("letterInput")
            .value.toLowerCase();

        if (guessedLetters.has(inputValue)) {
            updateFeedback(
                "text-warning",
                "You already guessed that letter. Try a different one."
            );
            return;
        }

        guessedLetters.add(inputValue);

        if (cpuGuessedWord.toLowerCase().includes(inputValue)) {
            updateWordWithGuesses();

            // Check if the word is completely guessed
            if (!wordToGuess.includes("_")) {
                showSuccessMessage();
                return;
            }

            updateFeedback("text-info", "Correct guess! Keep going.");
        } else {
            attempts--;

            if (attempts === 0) {
                revealWord();
                updateFeedback(
                    "text-danger",
                    "No more attempts left. Game over! "
                );
                setTimeout(resetGame, 8000);
            } else {
                updateFeedback(
                    "text-warning",
                    "Incorrect guess! Attempts left: " + attempts
                );
            }
        }

        document.getElementById("letterInput").value = "";

        updateWordDisplay();
        updateAttemptsDisplay();
    }

    function updateWordWithGuesses() {
        wordToGuess = "";
        for (let i = 0; i < cpuGuessedWord.length; i++) {
            const currentLetter = cpuGuessedWord[i].toLowerCase();
            if (guessedLetters.has(currentLetter)) {
                // If the letter has been guessed, reveal it
                wordToGuess += currentLetter + " ";
            } else {
                // If not, show an underscore
                wordToGuess += "_ ";
            }
        }

        updateWordDisplay();
    }

    function resetGame() {
        attempts = 3;
        guessedLetters.clear();
        wordToGuess = "";

        // Choose a new word
        cpuGuessIndex = Math.floor(Math.random() * wordArray.length);
        cpuGuessedWord = wordArray[cpuGuessIndex];

        // Initialize the wordToGuess with underscores
        for (let i = 0; i < cpuGuessedWord.length; i++) {
            wordToGuess += "_ ";
        }

        updateWordDisplay();
        updateAttemptsDisplay();

        updateFeedback("", "");

        document.getElementById("correctWord").style.display = "none";

        document.getElementById("letterInput").value = "";
    }

    function updateFeedback(className, message) {
        document.getElementById("feedback").className = className;
        document.getElementById("feedback").textContent = message;
    }

    function revealWord() {
        // Display the correct word when attempts < 1
        document.getElementById(
            "correctWord"
        ).textContent = `The correct word was: ${cpuGuessedWord}`;
        document.getElementById("correctWord").style.display = "block";
    }

    function showSuccessMessage() {
        updateFeedback(
            "text-success",
            "Congratulations! You guessed the word!"
        );
    }
});
