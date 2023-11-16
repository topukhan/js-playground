const changeColorDiv = document.getElementById("changeColor")

changeColorDiv.addEventListener("click", (event) => {
    const targetColor = event.target
    if (targetColor.classList.contains("btn")) {
        document.body.style.background = targetColor.id;
    }
})
