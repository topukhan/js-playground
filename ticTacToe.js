document.addEventListener("DOMContentLoaded", function () {
    let signs = ["😀", "😡", "😀", "😡", "😀", "😡", "😀", "😡", "😀"];
    let clickFlags = [];

    const container = document.getElementById("ticTacToeTable");
    container.addEventListener("click", (event) => {
        if (!isGameFinished()) {
            const targetCell = event.target;
            if (targetCell.classList.contains("cell")) {
                let clicked = isCellClicked(targetCell.id);
                if (!clicked) {
                    let lastItem = signs.pop();
                    targetCell.textContent = lastItem;
                }
                checkGameMatch();
            }
        }
    });

    let isAngryMatch = false;
    let isSmileyMatch = false;
    let isDraw = false;

    function checkGameMatch() {
        checkRowMatch(["cell1", "cell2", "cell3"]);
        checkRowMatch(["cell4", "cell5", "cell6"]);
        checkRowMatch(["cell7", "cell8", "cell9"]);

        checkRowMatch(["cell1", "cell4", "cell7"]);
        checkRowMatch(["cell2", "cell5", "cell8"]);
        checkRowMatch(["cell3", "cell6", "cell9"]);

        checkRowMatch(["cell1", "cell5", "cell9"]);
        checkRowMatch(["cell3", "cell5", "cell7"]);

        checkDraw();
        if (isGameFinished()) {
            disableCellClicks();
        }
    }

    function checkRowMatch(cells) {
        const emojis = cells.map(
            (cellId) => document.getElementById(cellId).textContent
        );

        setTimeout(() => {
            if (emojis.every((emoji) => emoji === emojis[0] && emoji !== "")) {
                if (emojis[0] === "😡") {
                    isAngryMatch = true;
                    isSmileyMatch = false;
                    alert("Angry man won");
                } else if (emojis[0] === "😀") {
                    isSmileyMatch = true;
                    isAngryMatch = false;
                    alert("Smiley man won");
                } else {
                    alert("whats wrong!");
                }
            }
        }, 50);
    }

    function checkDraw() {
        if (!isAngryMatch && !isSmileyMatch && signs.length === 0) {
            alert("in check draw start");
            const cells = document.querySelectorAll(".cell");
            const isAnyCellEmpty = Array.from(cells).some(
                (cell) => cell.textContent === ""
            );
            alert(isAnyCellEmpty);

            const isNoWinner = !isAngryMatch && !isSmileyMatch;
            // there is a issue with is draw
            if (isAnyCellEmpty && isNoWinner) {
                setTimeout(() => {
                    alert("It's a draw!");
                    isDraw = true;
                }, 100);
            }
        }
    }

    function isCellClicked(cellId) {
        if (clickFlags.find((element) => element == cellId) || isDraw) {
            alert("Can't use this cell");
            return true;
        } else {
            clickFlags.push(cellId);
            return false;
        }
    }

    function disableCellClicks() {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.style.cursor = "not-allowed";
        });
    }
    const restBtn = document.getElementById("resetBtn");
    restBtn.addEventListener("click", () => {
        clickFlags = [];
        isAngryMatch = false;
        isSmileyMatch = false;
        isDraw = false;
        signs = ["😀", "😡", "😀", "😡", "😀", "😡", "😀", "😡", "😀"];
        signs.length = 9;
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.textContent = "";
            cell.style.cursor = "pointer";
        });
    });

    function isGameFinished() {
        return isAngryMatch || isSmileyMatch || isDraw;
    }
});
