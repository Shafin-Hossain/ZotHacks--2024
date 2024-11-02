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
}
