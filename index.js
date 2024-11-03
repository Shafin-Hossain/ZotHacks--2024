import fetchImage from './image_api.js';
import fetchQuote from './quote_api.js';

export function getParamaters() {
    const chosen = localStorage.getItem("1") + localStorage.getItem("2") + localStorage.getItem("3")
    switch(chosen) {
        case '111':
            return ['casual gamer', 'cool']
        case '112':
            return ['social gamer', 'humour']
        case '121':
            return ['social butterfly', 'friendship']
        case '122':
            return ['avid adventurer', 'funny']
        case '211':
            return ['homebody', 'home']
        case '212':
            return ['nerd', 'intelligence']
        case '221':
            return ['laidback', 'home']
        case '222':
            return ['charming', 'success']
    }
}

function startNextPage() {
    let home = document.getElementById('home');
    home.style.display = 'none';

    let questionOne = document.getElementById('question-1');
    questionOne.style.display = 'flex';
}
function questionOneButtonOneNextPage() {
    let q1b1 = document.getElementById('question-1-button-1');
    localStorage.setItem("1","1")

    questionOneNextPage()
}
function questionOneButtonTwoNextPage() {
    let q1b2 = document.getElementById('question-1-button-2');
    localStorage.setItem("1","2")

    questionOneNextPage()
}

function questionOneNextPage() {
    let questionOne = document.getElementById('question-1');
    questionOne.style.display = 'none';

    let questionTwo = document.getElementById('question-2');
    questionTwo.style.display = 'flex';
}
function questionTwoButtonOneNextPage() {
    let q2b1 = document.getElementById('question-2-button-1');
    localStorage.setItem("2","1")

    questionTwoNextPage()
}
function questionTwoButtonTwoNextPage() {
    let q2b2 = document.getElementById('question-2-button-2');
    localStorage.setItem("2","2")

    questionTwoNextPage()
}

function questionTwoNextPage() {
    let questionTwo = document.getElementById('question-2');
    questionTwo.style.display = 'none';

    let questionThree = document.getElementById('question-3');
    questionThree.style.display = 'flex';
}
function questionThreeButtonOneNextPage() {
    let q3b1 = document.getElementById('question-3-button-1');
    localStorage.setItem("3","1")

    questionThreeNextPage()
}
function questionThreeButtonTwoNextPage() {
    let q3b2 = document.getElementById('question-3-button-2');
    localStorage.setItem("3","2")

    questionThreeNextPage()
}

async function questionThreeNextPage() {
    let questionThree = document.getElementById('question-3');
    questionThree.style.display = 'none';

    let questionFour = document.getElementById('end-screen');
    questionFour.style.display = 'flex';

    const [imageQuery, quoteQuery] = getParamaters()

    const imageData = await fetchImage(imageQuery)
    const quoteData = await fetchQuote(quoteQuery)

    const image = imageData.urls.regular
    const quote = quoteData[0].quote

    const closingImage = document.getElementById('closing-image')
    const closingPersonality = document.getElementById('closing-personality')
    const closingQuote = document.getElementById('closing-quote')

    closingImage.src = image
    closingPersonality.innerText = imageQuery + ' PETR'
    closingQuote.innerHTML = "&ldquo;" + quote + "&rdquo;"
}

function startEnter() {
    const up = document.getElementById('hackpetr-up')
    const down= document.getElementById('hackpetr-down')
    up.style.display = 'block'
    down.style.display = 'none'
}

function startLeave() {
    const up = document.getElementById('hackpetr-up')
    const down= document.getElementById('hackpetr-down')
    up.style.display = 'none'
    down.style.display = 'block'
}

document.getElementById('start-button').addEventListener('click', startNextPage)
document.getElementById('question-1-button-1').addEventListener('click', questionOneButtonOneNextPage)
document.getElementById('question-1-button-2').addEventListener('click', questionOneButtonTwoNextPage)
document.getElementById('question-2-button-1').addEventListener('click', questionTwoButtonOneNextPage)
document.getElementById('question-2-button-2').addEventListener('click', questionTwoButtonTwoNextPage)
document.getElementById('question-3-button-1').addEventListener('click', questionThreeButtonOneNextPage)
document.getElementById('question-3-button-2').addEventListener('click', questionThreeButtonTwoNextPage)

document.getElementById('start-button').addEventListener('mouseenter', startEnter)
document.getElementById('start-button').addEventListener('mouseleave', startLeave)

