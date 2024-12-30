const questions = [
    { question: "En JavaScript, 'null' est un type d'objet.", answer: true },
    { question: "Les tableaux en JavaScript commencent à l'index 1.", answer: false },
    { question: "La méthode 'map()' peut être utilisée pour transformer un tableau.", answer: true },
    { question: "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", answer: true },
    { question: "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", answer: false },
    { question: "Le mot-clé 'const' permet de déclarer une variable modifiable.", answer: false },
    { question: "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", answer: true },
    { question: "Le mot-clé 'this' fait toujours référence à l'objet global.", answer: false },
    { question: "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", answer: true },
    { question: "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", answer: false }
];

const questionElement = document.getElementById('question');
const scoreElement = document.getElementById('score');
const trueButton = document.getElementById('true-btn');
const falseButton = document.getElementById('false-btn');

trueButton.addEventListener('click', () => answer(true));
falseButton.addEventListener('click', () => answer(false));

let currquestion = 0;
let score = 0;

function loadQuestion() {
    if (currquestion < questions.length) {
        questionElement.textContent = questions[currquestion].question;
    } else {
        questionElement.textContent = " Score " + score ;
        trueButton.style.display = 'none';
        falseButton.style.display = 'none';
    }
}

function answer(isTrue) {
    const currentQuestion = questions[currquestion];
    if (isTrue === currentQuestion.answer) {
        score++;
    }
    currquestion++;
    loadQuestion();
}

loadQuestion();