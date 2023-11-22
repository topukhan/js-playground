const changeColorDiv = document.getElementById("changeColor")

changeColorDiv.addEventListener("click", (event) => {
    const targetColor = event.target
    if (targetColor.classList.contains("btn")) {
        document.body.style.background = targetColor.id;
    }
})

let isPartyEnd = false

const endParty = document.getElementById('partyStopBtn')
endParty.addEventListener('click', () =>  {
    partyStop()
})

const beginParty = document.getElementById('partyStartBtn')
beginParty.addEventListener('click', () => {
    isPartyEnd = false
    if (isPartyEnd != true) {
        partyStart()
    }
})

function partyStart() {
    let partyColor = ['red', 'green', 'blue', 'yellow', 'yellow', 'navy', 'purple', 'orange', 'lightblue', 'cyan', 'pink', 'brown', 'gray', 'black', 'white', 'olive', 'magenta', 'teal', 'maroon', 'indigo']
    if (!isPartyEnd) {
        let backgroundColor = Math.floor(Math.random() * partyColor.length)
        document.body.style.background = partyColor[backgroundColor]
        setTimeout(partyStart, 300)
    }
}
function partyStop() {
    isPartyEnd = true
}