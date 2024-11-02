import image_api from './image_api.js';
import quote_api from './quote_api.js';

function getParamaters() {
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
            return ['charmster', 'sucess']
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

    questionOneNextPage()
}
function questionThreeButtonTwoNextPage() {
    let q3b2 = document.getElementById('question-3-button-2');
    localStorage.setItem("3","2")

    questionOneNextPage()
}

function questionThreeNextPage() {
    let questionThree = document.getElementById('question-3');
    questionThree.style.display = 'none';

    let questionFour = document.getElementById('end-screen');
    questionFour.style.display = 'flex';

    const [imageQuery, quoteQuery] = getParamaters()
}
