document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("letterForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            // alert(cpuGuessedWord)
            const inputValue = document.getElementById("letterInput").value;
            checkGuess(cpuGuessedWord, inputValue);
            console.log("Input Value:", inputValue);
            document.getElementById("letterInput").value = "";
        });

    function checkGuess(cpuGuessedWord, inputValue) {
        const cpuWordLowerCase = cpuGuessedWord.toLowerCase();
        const inputValueLowerCase = inputValue.toLowerCase();

        if (cpuWordLowerCase.includes(inputValueLowerCase)) {
            alert("matched");
        } else {
            --attempts;
            if (attempts === 0) {
                alert("No more attempts left. Game over!");
                // You may want to reset the game or perform additional actions here
            } else {
                alert(`Incorrect guess! Attempts left: ${attempts}`);
            }
        }
    }

    function resetGame() {
        // Your reset logic goes here
    }
    let attempts = 5;
    const wordArray = [
        "apple",
        "banana",
        "chocolate",
        "dog",
        "elephant",
        "flower",
        "guitar",
        "happiness",
        "internet",
        "jazz",
        "kangaroo",
        "lemon",
        "mountain",
        "notebook",
        "ocean",
        "pizza",
        "quasar",
        "rainbow",
        "sunshine",
        "umbrella",
    ];

    let cpuGuessIndex = Math.floor(Math.random() * 20);
    let cpuGuessedWord = wordArray[cpuGuessIndex];
    // alert(cpuGuessedWord)
    if (cpuGuessedWord.length > 0) {
        for (let i = 0; i < cpuGuessedWord.length; i++) {
            document.getElementById("wordToGuess").innerHTML += "_ ";
        }
    }
});
