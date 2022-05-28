const question = document.querySelector("#question");
const answers = Array.from(document.querySelecterAll(".answer-text"));

let correctAnswer = true
let score = 0

let questions = {

    questionOne: {
        question: "What number is the first element in an array attributed to?",
        choice1: "1",
        choice2: "4",
        choice3: "0",
        choice4: "10",
        answer: 3,
    },

    questionTwo: {
        question: "True or false, booleans allow you to find out if an expression is true.",
        choice1: "True",
        choice2: "False",
        answer: 1,
    },

    questionThree: {
        question: "What does JSON stand for?",
        choice1: "JavaScript Operator Navigation",
        choice2: "JavaScript Object Notation",
        choice3: "JavaScript Omit Null",
        choice4: "JASON!",
        answer: 2,
    },

    questionFour: {
        question: "Executing a 'break' statement in JS would do what?",
        choice1: "Destroy everything",
        choice2: "Tell you to take a 5 minute break",
        choice3: "Exit a switch or loop",
        choice4: "Close the webpage it operates within",
        answer: 3,
    },

    questionFive: {
        question: "Which of the following can you do when using JavaScript operators?",
        choice1: "Assign values",
        choice2: "Compare values",
        choice3: "Perform arithmetic operations",
        choice4: "All of the above",
        answer: 4,
    }
};

startQuiz = function() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    newQuestion()
};

newQuestion = function() {

}