const startButton = document.getElementById('start-btn');
const pageTitle = document.getElementById('page-title');
const instructions = document.getElementById('instructions');
const questionContainer = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const choiceButton1 = document.getElementById('choice-button-1');
const choiceButton2 = document.getElementById('choice-button-2');
const choiceButton3 = document.getElementById('choice-button-3');
const choiceButton4 = document.getElementById('choice-button-4');
const answerContainer = document.getElementById('answer-container')
let questionOrder, questionIndex, answerOrder, answerIndex

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    pageTitle.classList.add('hide')
    instructions.classList.add('hide')
    questionContainer.classList.remove('hide')
    answerContainer.classList.remove('hide')
    questionOrder = (i=0, i<questions.length, i++)
    questionIndex = 0
    answerOrder = (i=0, i<questions[questionOrder].answerChoices.length, i++)
    answerIndex = 0

    newQuestion();
};

function newQuestion() {
    
    currentQuestion(questionOrder[questionIndex])
};

function currentQuestion(question) {
    questionEl.innerText = questions[questionOrder].question

    currentAnswers();
};

function currentAnswers() {
    choiceButton1.innerText = questions[questionOrder].answerChoices[0].choice
    choiceButton2.innerText = questions[questionOrder].answerChoices[1].choice
    choiceButton3.innerText = questions[questionOrder].answerChoices[2].choice
    choiceButton4.innerText = questions[questionOrder].answerChoices[3].choice
};

const questions = [

    {
        question: "What number is the first element in an array attributed to?",
        answerChoices: [
        {choice: "1", correct: false},
        {choice: "4", correct: false},
        {choice: "0", correct: true},
        {choice: "10", correct: false}
        ]
    },

    {
        question: "True or false, booleans allow you to find out if an expression is true.",
        answerChoices: [
        {choice: "True", correct: true},
        {choice: "False", correct: false}
        ]
    },

    {
        question: "What does JSON stand for?",
        answerChoices: [
        {choice: "JavaScript Operator Navigation", correct: false},
        {choice: "JavaScript Object Notation", correct: true},
        {choice: "JavaScript Omit Null", correct: false},
        {choice: "JASON!", correct: false}
        ]
    },

    {
        question: "Executing a 'break' statement in JS would do what?",
        answerChoices: [
        {choice: "Destroy everything", correct: false},
        {choice: "Tell you to take a 5 minute break", correct: false},
        {choice: "Exit a switch or loop", correct: true},
        {choice: "Close the webpage it operates within", correct: false}
        ]
    },

    {
        question: "Which of the following can you do when using JavaScript operators?",
        answerChoices: [
        {choice: "Assign values", correct: false},
        {choice: "Compare values", correct: false},
        {choice: "Perform arithmetic operations", correct: false},
        {choice: "All of the above", correct: true}
        ]
    }
];