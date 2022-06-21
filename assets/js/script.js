const startButton = document.getElementById("start-btn");
const pageTitle = document.getElementById("page-title");
const instructions = document.getElementById("instructions");
var timerEl = document.getElementById('timer')
var timeLeft = 75;
const questionContainer = document.getElementById("question-container");
let questionEl = document.getElementById("question");
const choiceButton1 = document.getElementById("choice-button-1");
const choiceButton2 = document.getElementById("choice-button-2");
const choiceButton3 = document.getElementById("choice-button-3");
const choiceButton4 = document.getElementById("choice-button-4");
const answerContainer = document.getElementById("answer-container");

let answersArr = [choiceButton1, choiceButton2, choiceButton3, choiceButton4];

let questionIndex = 0;

const questions = [
  {
    question: "What number is the first element in an array attributed to?",
    answerChoices: [
      { choice: "1", correct: "false" },
      { choice: "4", correct: "false" },
      { choice: "0", correct: "true" },
      { choice: "10", correct: "false" },
    ],
  },

  {
    question:
      "True or false, booleans allow you to find out if an expression is true.",
    answerChoices: [
      { choice: "True", correct: "true" },
      { choice: "False", correct: "false" },
      { choice: "True", correct: "false" },
      { choice: "False", correct: "false" },
    ],
  },

  {
    question: "What does JSON stand for?",
    answerChoices: [
      { choice: "JavaScript Operator Navigation", correct: "false" },
      { choice: "JavaScript Object Notation", correct: "true" },
      { choice: "JavaScript Omit Null", correct: "false" },
      { choice: "JASON!", correct: "false" },
    ],
  },

  {
    question: "Executing a 'break' statement in JS would do what?",
    answerChoices: [
      { choice: "Destroy everything", correct: "false" },
      { choice: "Tell you to take a 5 minute break", correct: "false" },
      { choice: "Exit a switch or loop", correct: "true" },
      { choice: "Close the webpage it operates within", correct: "false" },
    ],
  },

  {
    question:
      "Which of the following can you do when using JavaScript operators?",
    answerChoices: [
      { choice: "Assign values", correct: "false" },
      { choice: "Compare values", correct: "false" },
      { choice: "Perform arithmetic operations", correct: "false" },
      { choice: "All of the above", correct: "true" },
    ],
  },
];

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  pageTitle.classList.add("hide");
  instructions.classList.add("hide");
  questionContainer.classList.remove("hide");
  answerContainer.classList.remove("hide");

  countdown();
  renderQuestion();
}

function renderQuestion() {
  questionEl.textContent = questions[questionIndex].question;
  renderChoices();
}

function renderChoices() {
  var choices = questions[questionIndex].answerChoices;

  choices.forEach((choice, index) => {
    answersArr[index].textContent = choice.choice;
    answersArr[index].value = choice.correct;
  });
}

function countdown() {

  var timeInterval = setInterval(function() {

    if(timeLeft >= 1 && questionIndex < 4) {
      timerEl.textContent = 'Time:' + timeLeft
      timeLeft--;
    } else if (questionIndex > 4) {
      clearInterval(timeInterval);
    } else {
      timerEl.textContent = 'Time: 0';
      clearInterval(timeInterval);
      endGame();
    }

  }, 1000)
}

function wrongPenalty() {
  if(timeLeft >= 1) {
    timeLeft -= 5;
  }
}

// INCOMPLETE END GAME FUNCTION
function endGame() {

  questionContainer.classList.add('hide')
  answerContainer.classList.add('hide')
  

  // // var highScore = localStorage.getItem('highscore');
  // // if(highScore === null) {
  // //   highScore = 0;
  // // }

  // // if(timeLeft > highScore) {
  // //   localStorage.setItem('highscore', timeLeft);
  // //   localStorage.setItem('initials', )
  // }
}

// function validateAnswer() {
//     if (this.value === "true") {
//         console.log("correct answer");
//     } else {
//         console.log("wrong");
//         wrongPenalty();
//     }
// }

choiceButton1.addEventListener("click", function () {
  if (this.value === "true") {
    console.log("correct answer");
  } else {
    console.log("wrong");
    wrongPenalty();
  }
  //   setTimeout(function () {
  if(questionIndex <4) {
    questionIndex++;
    console.log(questionIndex);
    renderQuestion();
  } else {
    endGame();
  }
  //   }, 300);;
});
choiceButton2.addEventListener("click", function () {
  if (this.value === "true") {
    console.log("correct answer");
  } else {
    console.log("wrong");
    wrongPenalty();
  }
  //   setTimeout(function () {
  if(questionIndex <4) {
    questionIndex++;
    console.log(questionIndex);
    renderQuestion();
  } else {
    endGame();
  }
  //   }, 300);;
});
choiceButton3.addEventListener("click", function () {
  if (this.value === "true") {
    console.log("correct answer");
  } else {
    console.log("wrong");
    wrongPenalty();
  }
  //   setTimeout(function () {
  if(questionIndex <4) {
    questionIndex++;
    console.log(questionIndex);
    renderQuestion();
  } else {
    endGame();
  }
  //   }, 300);;
});
choiceButton4.addEventListener("click", function () {
  if (this.value === "true") {
    console.log("correct answer");
  } else {
    console.log("wrong");
    wrongPenalty();
  }
  //   setTimeout(function () {
  if(questionIndex <4) {
    questionIndex++;
    console.log(questionIndex);
    renderQuestion();
  } else {
    endGame();
  }
  //   }, 300);;
});