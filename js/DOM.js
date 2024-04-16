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

// ============
// Joke scripts
const jokeList = {
    "What did the Buddhist ask the hot dog vendor?":
        "Make me one with everything.",
    "You know why you never see elephants hiding up in trees?":
        "Because they’re really good at it.",
    "What is red and smells like blue paint?": "Red paint.",
    "What do you call a parade of rabbits hopping backwards?":
        "A receding hare-line.",
    "Where does the General keep his armies?": "In his sleevies!",
    "Why aren’t koalas actual bears?": "The don’t meet the koalafications.",
    "A bear walks into a restaurant and says, “I want a grilled… cheese.” The waiter says “Why the big pause?”":
        "The bear replies, “I don’t know. I was born with them.”",
    "What do you call bears with no ears?": "B.",
    "Why did the tomato blush?": "Because it saw the salad dressing.",
    "How do you make a tissue dance?": "You put a little boogie in it.",
    "What do you call a train carrying bubblegum?": "A chew-chew train.",
    "What’s brown and sticky?": "A stick.",
    "What does a pepper do when it’s angry?": "It gets jalapeño face!",
    "What’s a foot long and slippery?": "A slipper.",
    "Why doesn’t the sun go to college?": "Because it has a million degrees!",
    "What is the resemblance between a green apple and a red apple?":
        "They’re both red except for the green one.",
    "How did the hipster burn his mouth?":
        "He ate the pizza before it was cool.",
    "What’s the difference between an oral thermometer and a rectal thermometer?":
        "The taste.",
    "I told my friend 10 jokes to get him to laugh.":
        "Sadly, no pun in 10 did.",
    "What’s red and moves up and down?": "A tomato in an elevator",
    "Why can’t you hear a pterodactyl go to the bathroom?":
        "Because the “P” is silent!",
    "Can February march?": "No, but April may.",
    "How did the blonde die ice fishing?": "She was hit by the zamboni.",
    "What did one traffic light say to the other?":
        "Stop looking at me, I’m changing!",
    "How do you throw a space party?": "You planet.",
    "What’s a pirates favorite letter?": "You think it’s R but it be the C.",
    "Have you heard about corduroy pillows?": "They’re making headlines.",
    "What did the green grape say to the purple grape?":
        "OMG!!!!!!! BREATHE!! BREATHEEEEE!!!!!",
    "What do Alexander the Great and Winnie the Pooh have in common?":
        "Same middle name.",
    "Why did the chicken cross the playground?": "To get to the other slide.",
    "What did the left eye say to the right eye?":
        "Between you and me, something smells.",
    "Why did the nurse need a red pen at work?":
        "In case she needed to draw blood.",
    "Why did the cowboy get a wiener dog?":
        "He wanted to get a long little doggie.",
    "What do you call a rooster staring at a pile of lettuce?":
        "A chicken sees a salad.",
    "Why don’t Calculus majors throw house parties?":
        "Because you should never drink and derive.",
    "What is a little bear with no teeth is called?": "A gummy bear.",
    "Why did the teddy bear skip out on dessert when she was on a date?":
        "She was stuffed.",
    "Why does Humpty Dumpty love autumn?":
        "Because Humpty Dumpty had a great fall.",
    "Why are ghosts such bad liars?": "Because they are easy to see through.",
    "Why do bees have sticky hair?": "Because they use honeycombs.",
    "What do you call a pony with a cough?": "A little horse.",
    "Why don’t scientists trust atoms?": "Because they make up everything.",
    "What do you get from a pampered cow?": "Spoiled milk.",
    "Where are average things manufactured?": "The satisfactory.",
    "Why couldn’t the leopard play hide and seek?":
        "Because he was always spotted.",
    "What do you call a fake noodle?": "An impasta.",
    "What did the bald man exclaim when he received a comb for a present?":
        "Thanks— I’ll never part with it!",
};

function generateJoke() {
    const jokeKeys = Object.keys(jokeList);
    if (jokeKeys.length > 0) {
        const min = 0; // Minimum value
        const max = jokeKeys.length; // Maximum value
        const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        const firstJokeKey = jokeKeys[randomIndex];
        const firstJokeValue = jokeList[firstJokeKey];
        Question.innerHTML = firstJokeKey;
        Answer.innerHTML = firstJokeValue;

        // Set blur effect on Answer and start countdown timer
        Answer.style.filter = "blur(5px)";
        let timeLeft = 15; // 15 seconds countdown
        const timerElement = document.getElementById("timeLeft");
        timerElement.textContent = `${timeLeft} second${
            timeLeft !== 1 ? "s" : ""
        }`; // Display initial time

        const countdownInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft >= 0) {
                timerElement.textContent = `${timeLeft} second${
                    timeLeft !== 1 ? "s" : ""
                }`;
                timerElement.style.color = timeLeft <= 3 ? "red" : "";
            } else {
                clearInterval(countdownInterval); // Stop countdown when time is up
            }
        }, 1000);

        setTimeout(() => {
            Answer.style.filter = "blur(0px)";
            clearInterval(countdownInterval); // Clear interval when time is up
            timerElement.textContent = "Time's up!";
        }, 15000); // Stop blur effect after 15 seconds
    }
}
