document.querySelector("#start").addEventListener("click", () => {
    let beginText = document.getElementById("begin")
    
    beginText.textContent = `Guess number between ${min} and ${max}`;
    var min = 1;
    var max = 100;
    // min = prompt("Enter MINIMUM number in a range")
    // max = prompt("Enter MAXIMUM number in a range")
    setTimeout(() => {
        // beginText.textContent = `After---Guess number between ${min} and ${max}`;
        let userGuess;
        let count = 0;
        // in progress 

        const randomNum = Math.floor(Math.random() * (max - min)) + min;
        // start guessing
        do {
            userGuess = prompt("Please enter");
            userGuess = Number.parseInt(userGuess);
            if (userGuess > randomNum) {
                alert("Please enter smaller number");
            } else if (userGuess < randomNum) {
                alert("Please enter larger number");
            } else {
                alert("Your guess is correct");
            }
            count++;
        } while (userGuess != randomNum && count < 7);

        if (userGuess == randomNum) {
            document.querySelector("#begin").textContent =
                "You guessed the number in " + count + " try";
        } else {
            document.querySelector("#begin").textContent =
                "Better luck next time!!";
        }
    }, 200);
});
