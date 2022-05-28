const startButton = document.getElementById('start-btn');
const pageTitle = document.getElementById('page-title');
const instructions = document.getElementById('instructions');
const questionContainer = document.getElementById('question-container');



startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    pageTitle.classList.add('hide')
    instructions.classList.add('hide')
    console.log('this button is hidden')
   
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

// function newQuestion() {
//     var questionIndex = Math.floor(Math.random() * availableQuestions.length)
//     currentQuestion = availableQuestions[questionIndex]
//     question.innerText = currentQuestion.question

//     answers.forEach(choice = function(){
//         const number = choice.dataset['number']
//         choice.innerText = currentQuestion['choice' + number]
//     })

//     availableQuestions.splice(questionIndex, 1)

//     correctAnswer = true
// };

// choices.forEach(choice = function() {
//     choice.addEventListener('click', e = function() {
//         if(!correctAnswer) 
//         return

//         correctAnswer = false
//         const selectedAnswer = e.target
//         const chosenAnswer = selectedAnswer.dataset['number']
//     })
// });