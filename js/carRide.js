document.getElementById("check").addEventListener("click", () => {
    const age = prompt("Enter your age");
    if (age >= 18) {
        let index = 0;
        alert("You can drive.....");
        distance = Number.parseInt(prompt("Enter distance in kilometers you want to drive"))
        function appendCar() {
            if (index < distance) {
                document.getElementById("car").textContent += "🚓";
                if (index == distance-1) {
                    document.getElementById("car").textContent += ` ${distance} kilometers ride complete `
                }
                index++;
                setTimeout(appendCar, 150);
            }
        }
        appendCar();
    } else {
        alert("You can't drive, buy a lollipop");
    }
});