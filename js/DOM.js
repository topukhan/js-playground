document.addEventListener('DOMContentLoaded', function() {
    let cardTitle = document.getElementsByClassName('card-title')
    console.log(cardTitle);
    for (const iterator of cardTitle) {
        iterator.style.color = 'cyan'
        // cardTitle[0].style.color = 'cyan'
    }
    // Array.from(cardTitle).forEach(element => {
    //     element.style.color = 'red'
    // });
    let cardTitles = document.querySelectorAll('.card-title')
    let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'lightblue', 'cyan', 'magenta']
    if (cardTitles.length > 0) {
        for (const eachTitle of cardTitles) {
            let randomColor = Math.floor(Math.random() * colors.length)
            eachTitle.style.color = colors[randomColor]
        }
    }

    let firstTitle = document.querySelector('.card-title')
    firstTitle.style.fontSize = '30px'
    console.log(document.getElementsByName('search')[0]);
    
    
    // cardTitles[0].style.color = 'red'
    // cardTitles[1].style.color = 'blue'
    // cardTitles[2].style.color = 'pink'
    // cardTitles[3].style.color = 'purple'

})