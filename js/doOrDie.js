const doorList = [
    "door1",
    "door2",
    "door3",
    "door4",
    "door5",
    "door6",
    "door7",
    "door8",
    "door9",
    "door10",
];
const randomDoor = Math.floor(Math.random() * doorList.length) + 1;
let gameOver = false;
counter = 3;
let lifeCounter = document.getElementById("lifes");
lifeCounter.innerHTML = `Life Remaining: ${counter}`;

const door1 = document.getElementById("door1");
door1.addEventListener("click", () => {
    if (gameOver) {
        return;
    }
    counter--;
    if (doorList[randomDoor - 1] == "door1") {
        door1.className = "green-door";
        lifeCounter.innerHTML = `Congratulations!!! You Survived`;
        gameOver = true;
    } else {
        door1.className = "red-door";
        lifeCounter.innerHTML = `Life Remaining: ${counter}`;

        if (counter <= 0) {
            lifeCounter.innerHTML = `You are dead 💀👻👾`;
            setTimeout(safeDoor, 800);
            gameOver = true;
        }
    }
});

const door2 = document.getElementById("door2");
door2.addEventListener("click", () => {
    if (gameOver) {
        return;
    }
    counter--;
    if (doorList[randomDoor - 1] == "door2") {
        door2.className = "green-door";
        lifeCounter.innerHTML = `Congratulations!!! You Survived`;
        gameOver = true;
    } else {
        door2.className = "red-door";
        lifeCounter.innerHTML = `Life Remaining: ${counter}`;

        if (counter <= 0) {
            lifeCounter.innerHTML = `You are dead 💀👻👾`;
            setTimeout(safeDoor, 800);
            gameOver = true;
        }
    }
});

const door3 = document.getElementById("door3");
door3.addEventListener("click", () => {
    if (gameOver) {
        return;
    }
    counter--;
    if (doorList[randomDoor - 1] == "door3") {
        door3.className = "green-door";
        lifeCounter.innerHTML = `Congratulations!!! You Survived`;
        gameOver = true;
    } else {
        door3.className = "red-door";
        lifeCounter.innerHTML = `Life Remaining: ${counter}`;

        if (counter <= 0) {
            lifeCounter.innerHTML = `You are dead 💀👻👾`;
            setTimeout(safeDoor, 800);
            gameOver = true;
        }
    }
});

const door4 = document.getElementById("door4");
door4.addEventListener("click", () => {
    if (gameOver) {
        return;
    }
    counter--;
    if (doorList[randomDoor - 1] == "door4") {
        door4.className = "green-door";
        lifeCounter.innerHTML = `Congratulations!!! You Survived`;
        gameOver = true;
    } else {
        door4.className = "red-door";
        lifeCounter.innerHTML = `Life Remaining: ${counter}`;

        if (counter <= 0) {
            lifeCounter.innerHTML = `You are dead 💀👻👾`;
            setTimeout(safeDoor, 800);
            gameOver = true;
        }
    }
});

const door5 = document.getElementById("door5");
door5.addEventListener("click", () => {
    if (gameOver) {
        return;
    }
    counter--;
    if (doorList[randomDoor - 1] == "door5") {
        door5.className = "green-door";
        lifeCounter.innerHTML = `Congratulations!!! You Survived`;
        gameOver = true;
    } else {
        door5.className = "red-door";
        lifeCounter.innerHTML = `Life Remaining: ${counter}`;

        if (counter <= 0) {
            lifeCounter.innerHTML = `You are dead 💀👻👾`;
            setTimeout(safeDoor, 800);
            gameOver = true;
        }
    }
});

const door6 = document.getElementById("door6");
door6.addEventListener("click", () => {
    if (gameOver) {
        return;
    }
    counter--;
    if (doorList[randomDoor - 1] == "door6") {
        door6.className = "green-door";
        lifeCounter.innerHTML = `Congratulations!!! You Survived`;
        gameOver = true;
    } else {
        door6.className = "red-door";
        lifeCounter.innerHTML = `Life Remaining: ${counter}`;

        if (counter <= 0) {
            lifeCounter.innerHTML = `You are dead 💀👻👾`;
            setTimeout(safeDoor, 800);
            gameOver = true;
        }
    }
});

const door7 = document.getElementById("door7");
door7.addEventListener("click", () => {
    if (gameOver) {
        return;
    }
    counter--;
    if (doorList[randomDoor - 1] == "door7") {
        door7.className = "green-door";
        lifeCounter.innerHTML = `Congratulations!!! You Survived`;
        gameOver = true;
    } else {
        door7.className = "red-door";
        lifeCounter.innerHTML = `Life Remaining: ${counter}`;

        if (counter <= 0) {
            lifeCounter.innerHTML = `You are dead 💀👻👾`;
            setTimeout(safeDoor, 800);
            gameOver = true;
        }
    }
});

const door8 = document.getElementById("door8");
door8.addEventListener("click", () => {
    if (gameOver) {
        return;
    }
    counter--;
    if (doorList[randomDoor - 1] == "door8") {
        door8.className = "green-door";
        lifeCounter.innerHTML = `Congratulations!!! You Survived`;
        gameOver = true;
    } else {
        door8.className = "red-door";
        lifeCounter.innerHTML = `Life Remaining: ${counter}`;

        if (counter <= 0) {
            lifeCounter.innerHTML = `You are dead 💀👻👾`;
            setTimeout(safeDoor, 800);
            gameOver = true;
        }
    }
});

const door9 = document.getElementById("door9");
door9.addEventListener("click", () => {
    if (gameOver) {
        return;
    }
    counter--;
    if (doorList[randomDoor - 1] == "door9") {
        door9.className = "green-door";
        lifeCounter.innerHTML = `Congratulations!!! You Survived`;
        gameOver = true;
    } else {
        door9.className = "red-door";
        lifeCounter.innerHTML = `Life Remaining: ${counter}`;

        if (counter <= 0) {
            lifeCounter.innerHTML = `You are dead 💀👻👾`;
            setTimeout(safeDoor, 800);
            gameOver = true;
        }
    }
});

const door10 = document.getElementById("door10");
door10.addEventListener("click", () => {
    if (gameOver) {
        return;
    }
    counter--;
    if (doorList[randomDoor - 1] == "door10") {
        door10.className = "green-door";
        lifeCounter.innerHTML = `Congratulations!!! You Survived`;
        gameOver = true;
    } else {
        door10.className = "red-door";
        lifeCounter.innerHTML = `Life Remaining: ${counter}`;

        if (counter <= 0) {
            lifeCounter.innerHTML = `You are dead 💀👻👾`;
            setTimeout(safeDoor, 800);
            gameOver = true;
        }
    }
});

function safeDoor() {
    const safeDoorName = doorList[randomDoor - 1];
    const safeDoorOpen = document.getElementById(`${safeDoorName}`);
    safeDoorOpen.className = "green-door";
}
