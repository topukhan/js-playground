document.querySelector("#start").addEventListener("click", () => {
    let beginText = document.getElementById("begin")
    
    let min = 1
    let max = 100
    beginText.textContent = `Guess number between ${min} and ${max}`;
    setTimeout(() => {
        // beginText.textContent = `After---Guess number between ${min} and ${max}`;
        let userGuess
        let count = 0;
        // in progress 

        const randomNum = Math.floor(Math.random() * (max - min)) + min;
        // start guessing
        let life = 6
        do {
            userGuess = prompt("Please enter")
            userGuess = Number.parseInt(userGuess)
            if (userGuess > randomNum) {
                alert(`Please enter smaller number. ${life} try left`)
            } else if (userGuess < randomNum) {
                alert(`Please enter larger number. ${life} try left`)
            } else {
                alert("Your guess is correct")
            }
            
            count++
            life--
        } while (userGuess != randomNum && count < 7)

        if (userGuess == randomNum) {
            document.querySelector("#begin").textContent =
                "You guessed the number in " + count + " try"
        } else {
            document.querySelector("#begin").textContent =
                "Better luck next time!!"
        }
    }, 400);
});
