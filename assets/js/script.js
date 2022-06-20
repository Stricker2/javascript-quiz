const startButton = document.getElementById("start-btn");
const pageTitle = document.getElementById("page-title");
const instructions = document.getElementById("instructions");
const questionContainer = document.getElementById("question-container");
let questionEl = document.getElementById("question");
const choiceButton1 = document.getElementById("choice-button-1");
const choiceButton2 = document.getElementById("choice-button-2");
const choiceButton3 = document.getElementById("choice-button-3");
const choiceButton4 = document.getElementById("choice-button-4");
const answerContainer = document.getElementById("answer-container");

//  *******************************************************************************************************************
//  Since you have already selected these buttons above, I placed them into an array
//  This way, I have access to them globally and can apply individual event listeners on them, so we are no longer
//  defining them inside the for loop, and so we can avoid the skip bug
//  *******************************************************************************************************************
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

  renderQuestion();
}

function renderQuestion() {
    questionEl.textContent = questions[questionIndex].question;

    renderChoices();
    endGame();
}

function renderChoices() {
  var choices = questions[questionIndex].answerChoices;

  // *******************************************************************************************************************
  //This can also be a regular for loop, it will do the same thing, just showing you an alternative way to for loop with
  //forEach.
  //Here, we select your answerChoices inside the questions array, then we take the index and iterate through our answersArr
  //(which has your buttons as described above) and set the textcontent and add a value so we can evaluate it in the click event
  // *******************************************************************************************************************

  choices.forEach((choice, index) => {
    answersArr[index].textContent = choice.choice;
    answersArr[index].value = choice.correct;
  });
}

var endGame = function() {
    if(!questions[questionIndex].question) {
        return false
    }
}

// function validateAnswer() {
//     if (this.value === "true") {
//         console.log("correct answer");
//     } else {
//         console.log("wrong");
//     }
//     //   setTimeout(function () {
//     questionIndex++;
//     console.log(questionIndex);
//     renderQuestion();
//     //   }, 300);;
// }

// *******************************************************************************************************************
// an event listener attached to each button, this will will check, this is not DRY, so there is a lot of repeting code,
// I would recommend that you consolidate the code into a function and call that function here instead of the repetition
// *******************************************************************************************************************
// *******************************************************************************************************************
// 'this' has been covered, but it looks at the current element (so which button you clicked on), then we evaluate the value
// and increment the questionIndex and go to the next question
// By the way, I added the setTimeout and commented it out
// it sets a delay so the user experience would be nicer, feel free to use it or, it will work either way
// *******************************************************************************************************************
choiceButton1.addEventListener("click", function () {
  if (this.value === "true") {
    console.log("correct answer");
  } else {
    console.log("wrong");
  }
  //   setTimeout(function () {
  questionIndex++;
  console.log(questionIndex);
  renderQuestion();
  //   }, 300);;
});
choiceButton2.addEventListener("click", function () {
  if (this.value === "true") {
    console.log("correct answer");
  } else {
    console.log("wrong");
  }
  //   setTimeout(function () {
  questionIndex++;
  console.log(questionIndex);
  renderQuestion();
  //   }, 300);;
});
choiceButton3.addEventListener("click", function () {
  if (this.value === "true") {
    console.log("correct answer");
  } else {
    console.log("wrong");
  }
  //   setTimeout(function () {
  questionIndex++;
  console.log(questionIndex);
  renderQuestion();
  //   }, 300);;
});
choiceButton4.addEventListener("click", function () {
  if (this.value === "true") {
    console.log("correct answer");
  } else {
    console.log("wrong");
  }
  //   setTimeout(function () {
  questionIndex++;
  console.log(questionIndex);
  renderQuestion();
  //   }, 300);;
});