const signs = ["😀", "😡", "😀", "😡", "😀", "😡", "😀", "😡", "😀"];
const clickFlags = [];

const container = document.getElementById("ticTacToeTable");
container.addEventListener("click", (event) => {
    const targetCell = event.target;
    if (targetCell.classList.contains("cell")) {
        let clicked = isCellClicked(targetCell.id);
        if (!clicked) {
            let lastItem = signs.pop();
            targetCell.textContent = lastItem;
            lineMatch();
        }
    }
});

function lineMatch() {
    if (
        cell1.textContent == "😀" &&
        cell2.textContent == "😀" &&
        cell3.textContent == "😀"
    ) {
        alert("smile");
    }
}

function isCellClicked(cellId) {
    if (clickFlags.find((element) => element == cellId)) {
        alert("Can't use this cell");
        return true;
    } else {
        clickFlags.push(cellId);
        return false;
    }
}
