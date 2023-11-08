const signs = ["😀","😡","😀","😡","😀","😡","😀","😡","😀"]

const cell1 = document.getElementById("cell1")
cell1.addEventListener("click", () => {
    let lastItem = signs.pop()
    cell1.textContent = lastItem
    lineMatch()
})

const cell2 = document.getElementById("cell2")
cell2.addEventListener("click", () => {
    let lastItem = signs.pop()
    cell2.textContent = lastItem
    lineMatch()
})

const cell3 = document.getElementById("cell3")
cell3.addEventListener("click", () => {
    let lastItem = signs.pop()
    cell3.textContent = lastItem
    lineMatch()
})

const cell4 = document.getElementById("cell4")
cell4.addEventListener("click", () => {
    let lastItem = signs.pop()
    cell4.textContent = lastItem
})

const cell5 = document.getElementById("cell5")
cell5.addEventListener("click", () => {
    let lastItem = signs.pop()
    cell5.textContent = lastItem
})

const cell6 = document.getElementById("cell6")
cell6.addEventListener("click", () => {
    let lastItem = signs.pop()
    cell6.textContent = lastItem
})

const cell7 = document.getElementById("cell7")
cell7.addEventListener("click", () => {
    let lastItem = signs.pop()
    cell7.textContent = lastItem
})

const cell8 = document.getElementById("cell8")
cell8.addEventListener("click", () => {
    let lastItem = signs.pop()
    cell8.textContent = lastItem
})

const cell9 = document.getElementById("cell9")
cell9.addEventListener("click", () => {
    let lastItem = signs.pop()
    cell9.textContent = lastItem
})

function lineMatch() {
    if (cell1.textContent == "😀" && cell2.textContent == "😀" && cell3.textContent == "😀") {
        alert("smily")
    }
}