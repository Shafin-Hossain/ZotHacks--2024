function startNextPage() {
    let home = document.getElementById('home');
    home.style.display = 'none';

    let questionOne = document.getElementById('question-1');
    questionOne.style.display = 'flex';
}
function questionOneNextPage() {
    let questionOne = document.getElementById('question-1');
    questionOne.style.display = 'none';

    let questionTwo = document.getElementById('question-2');
    questionTwo.style.display = 'flex';
}
function questionTwoNextPage() {
    let questionTwo = document.getElementById('question-2');
    questionTwo.style.display = 'none';

    let questionThree = document.getElementById('question-3');
    questionThree.style.display = 'flex';
}
function questionThreeNextPage() {
    let questionThree = document.getElementById('question-3');
    questionThree.style.display = 'none';

    let questionFour = document.getElementById('end-screen');
    questionFour.style.display = 'flex';
}
