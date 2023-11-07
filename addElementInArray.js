// input array element from user
const arraySpan = document.getElementById("arr");
let arr = [1, 2, 3];
arraySpan.textContent = arr;
document
    .querySelector("#arrInsert")
    .addEventListener("click", () => {
        // continuous prompt until given element is 0
        document.querySelector("#rise").textContent = "👈👈👈👈👈";
        setTimeout(() => {
            let val;
            do {
                val = prompt("Insert new array element");
                console.log("new value : ", val);

                if (!isNaN(val)) {
                    arr.push(Number.parseInt(val));
                    arraySpan.textContent = arr;
                } else {
                    alert("Please enter a valid number");
                }
            } while (val != 0);
        }, 500);
    });
document.querySelector("#arrPop").addEventListener("click", () => {
    arr.pop();
    arraySpan.textContent = arr;
});