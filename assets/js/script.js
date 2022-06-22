const startButton = document.getElementById("start-btn")
const pageTitle = document.getElementById("page-title")
const instructions = document.getElementById("instructions")
var timerEl = document.getElementById('timer')
var timeLeft = 50;
const questionContainer = document.getElementById("question-container")
let questionEl = document.getElementById("question")
const answerContainer = document.getElementById("answer-container")
const choiceButton1 = document.getElementById("choice-button-1")
const choiceButton2 = document.getElementById("choice-button-2")
const choiceButton3 = document.getElementById("choice-button-3")
const choiceButton4 = document.getElementById("choice-button-4")
var finalScore = document.getElementById('score-declaration')
var highScorePrompt = document.getElementById('high-score')
var initialsPrompt = document.getElementById('initials-prompt')
var initialsInput = document.getElementById('initials-input')
var saveScoreBtn = document.getElementById('save-score')
var playAgainBtn = document.getElementById('restart')


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
    question: "What is a JavaScript Array?",
    answerChoices: [
      { choice: "A special variable used to hold multiple values", correct: "true" },
      { choice: "A ray gun built with JavaScript", correct: "false" },
      { choice: "Text used to describe code", correct: "false" },
      { choice: "Code that represents a true or false value", correct: "false" },
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
  console.log(questionIndex)
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

    if(timeLeft >= 1) {
      timerEl.textContent = 'Time:' + ' ' + timeLeft
      timeLeft--;
    } else {
      timerEl.textContent = 'Time: 0';
      clearInterval(timeInterval);
      endGame();
    }

    if(questionIndex > 4) {
      clearInterval(timeInterval)
    }

  }, 1000)
}

function wrongPenalty() {
  if(timeLeft >= 1) {
    timeLeft -= 5;
  }
}

function endGame() {
  questionIndex = 5
  questionContainer.classList.add('hide')
  answerContainer.classList.add('hide')
  var highScore = localStorage.getItem('highscore');

  if(highScore === null) {
    highScore = 0;
  }

  if(timeLeft > highScore) {
    highScorePrompt.classList.remove('hide')
    finalScore.innerText = "Congratulations! You got a new high score of " + timeLeft + "!"
    initialsPrompt.innerText = "Enter your initials below to save your new high score!"
  } else {
    highScorePrompt.classList.remove('hide')
    initialsInput.classList.add('hide')
    saveScoreBtn.classList.add('hide')
    finalScore.innerText = "You got a score of " + timeLeft + "! You did not beat your high score. Refresh the page to play again."
  }

  saveScoreBtn.addEventListener('click', function() {
    localStorage.setItem('highscore', timeLeft);
    localStorage.setItem('initials', initialsInput.value)
  })
  
}

choiceButton1.addEventListener("click", function () {
  if (this.value === "true") {
    console.log("correct answer");
  } else {
    console.log("wrong");
    wrongPenalty();
  }
  setTimeout(function () {
    if(questionIndex <4) {
      questionIndex++;
      console.log(questionIndex);
      renderQuestion();
    } else {
      endGame();
    }
  }, 300);
});

choiceButton2.addEventListener("click", function () {
  if (this.value === "true") {
    console.log("correct answer");
  } else {
    console.log("wrong");
    wrongPenalty();
  }
  setTimeout(function () {
    if(questionIndex <4) {
      questionIndex++;
      console.log(questionIndex);
      renderQuestion();
    } else {
      endGame();
    }
  }, 300);
});

choiceButton3.addEventListener("click", function () {
  if (this.value === "true") {
    console.log("correct answer");
  } else {
    console.log("wrong");
    wrongPenalty();
  }
  setTimeout(function () {
    if(questionIndex <4) {
      questionIndex++;
      console.log(questionIndex);
      renderQuestion();
    } else {
      endGame();
    }
  }, 300);
});

choiceButton4.addEventListener("click", function () {
  if (this.value === "true") {
    console.log("correct answer");
  } else {
    console.log("wrong");
    wrongPenalty();
  }
  setTimeout(function () {
    if(questionIndex <4) {
      questionIndex++;
      console.log(questionIndex);
      renderQuestion();
    } else {
      endGame();
    }
  }, 300);
});