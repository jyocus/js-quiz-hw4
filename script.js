var startButton = document.getElementById("start-btn");
var startPageEl = document.querySelector(".container");
var questionBoxEl = document.getElementById("question-box");
var questionEL = document.getElementById("question-container");
var answerButtonEl = document.getElementById("answer-buttons");
// var timeEL = document.querySelector("#timer");
// var secondsLeft = 60

//let because these will need to be altered later
let randQuestions, questionIndex

startButton.addEventListener("click", startGame);


//function to start the game, hide welcome section and show questions
function startGame() {
startPageEl.classList.add("hide");
randQuestions = questions.sort(() => Math.random() - .5)
questionIndex = 0
questionBoxEl.classList.remove("hide");
startQuestions()
}

function startQuestions() {
    // emptyBox()
    showNextQuestion(randQuestions[questionIndex]);
}
//running text on this ... keeps failing as an unexpected identifier 
    function showNextQuestion(question)
    questionEL.innerText = question.question
// function emptyBox() {
    
// }

// function setTime() {
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = secondsLeft 
  
//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         sendMessage();
//       }
  
//     }, 1000);
// }

//Questions Array
var questions = [ {
    question:"What is 1+1",
    choices: [
        { text: "2", correct: true },
        { text: "4", correct: false },
        { text: "6", correct: false },
        { text: "8", correct: false }
    ],
},{
    question:"What is 2+2",
    choices: [
        { text: "2", correct: true },
        { text: "4", correct: false },
        { text: "6", correct: false },
        { text: "8", correct: false }
    ],
},{
    question:"What is 4+4",
    choices: [
        { text: "2", correct: true },
        { text: "4", correct: false },
        { text: "6", correct: false },
        { text: "8", correct: false }
    ]
}

]




