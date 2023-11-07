const btn = document.getElementById("btn");
            btn.addEventListener("click", () => {
                const numberOfElement = prompt("Enter number of elements to add ");
                const input = document.getElementById("numberOfElement");
                input.textContent = `${numberOfElement} elements added`;

                let counter = 1;
                for (let i = 0; i < numberOfElement; i++) {
                    const content = document.getElementById("content");
                    const newHeading = document.createElement("h3");
                    newHeading.textContent = `Element ${counter}`;
                    content.appendChild(newHeading);
                    counter++;
                }
            });