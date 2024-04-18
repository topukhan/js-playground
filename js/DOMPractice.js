document.addEventListener("DOMContentLoaded", function () {
    let cardTitle = document.getElementsByClassName("card-title");
    // console.log(cardTitle);
    for (const iterator of cardTitle) {
        iterator.style.color = "cyan";
        // cardTitle[0].style.color = 'cyan'
    }
    // Array.from(cardTitle).forEach(element => {
    //     element.style.color = 'red'
    // });
    let cardTitles = document.querySelectorAll(".card-title");
    let colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "pink",
        "lightblue",
        "cyan",
        "magenta",
    ];
    if (cardTitles.length > 0) {
        for (const eachTitle of cardTitles) {
            let randomColor = Math.floor(Math.random() * colors.length);
            eachTitle.style.color = colors[randomColor];
        }
    }

    let firstTitle = document.querySelector(".card-title");
    firstTitle.style.fontSize = "30px";
    // console.log(document.getElementsByName("search")[0]);

    // cardTitles[0].style.color = 'red'
    // cardTitles[1].style.color = 'blue'
    // cardTitles[2].style.color = 'pink'
    // cardTitles[3].style.color = 'purple'
    let id1 = document.getElementById("id1");
    let sp1 = document.getElementById("sp1");
    // console.log(id1);
    // console.log(id1.matches("#id1"));
    // console.log(id1.matches(".box"));

    // console.log(sp1.closest("#sp1"));
    // console.log(id1.contains(sp1));
    // console.log(sp1.contains(sp1));
    // console.log(sp1.contains(id1));

    // Practice set
    // 1 (Navbar first element color red)
    let secondUL = document.getElementById("secondUL");

    if (secondUL) {
        styleFirstNavLink(secondUL);
    }

    function styleFirstNavLink(ulElement) {
        let firstListItem = ulElement.firstElementChild;

        if (firstListItem) {
            let navLink = firstListItem.querySelector(".nav-link");

            if (navLink) {
                navLink.style.color = "red";
            }
        }
    }
    // first and last green 
    let f_and_l = document.getElementById('firstAndLastGreen')
    f_and_l.firstElementChild.style.color = 'green'
    f_and_l.lastElementChild.style.color = 'green'
    // all li background to cyan 
    let lists = document.getElementsByTagName('li')
    for (let i = 0; i < lists.length; i++) {
        // there are 2 navbars in the html page
        if(!lists[i].closest('#navbarNav')){

            lists[i].style.background = 'cyan'
        }
    }
    // console.log(document.getElementsByTagName('span')[0]);
    // console.dir(document.getElementsByTagName('span')[0]);
    // 
    let attrMethod = document.getElementById('attrMethod')
    let attr = attrMethod.getAttribute('class') // find the value of a html element attribute
    let hasAttr = attrMethod.hasAttribute('style') // check if specific attribute is set or not
    let setAttr = attrMethod.setAttribute('name', 'attrBlueprint') // set a attribute to an element
    let removeAttr = attrMethod.removeAttribute('attrName') // remove existing attribute from the element

    // console.log(attr);
    // console.log(hasAttr);
    // console.log(attrMethod.attributes); // list of attribute add in element
    // console.log(attrMethod.dataset.soKid);
    // console.log(attrMethod.dataset);
    let insertionElem = document.getElementById('insertion')
    // insertionElem.innerHTML += "<b> Hello JS </b>"

    let span = document.createElement('span')
    span.innerHTML = "<i> <b>I am newly created span with Italic and bold </b> </i>"
    // insertionElem.appendChild(span) // appending single child nodes
    // insertionElem.append(span) //  append multiple nodes and strings (it supports in newer browsers)
    // insertionElem.prepend(span)
    // insertionElem.before(span) // insert immediate before of it's parent
    insertionElem.after(span) // insert immediate after of it's parent
    // insertionElem.replaceWith(span) // removes the reference element and replace with newly created elem
    
    
    
    
    
});
