var startButton = document.getElementById("start-btn");
var startPageEl = document.querySelector(".container");
var questionBoxEl = document.getElementById("question-box");
var timeEL = document.querySelector("#timer");

var secondsLeft = 60

let getQuestion, 

startButton.addEventListener("click", startGame);

//function to start the game, hide welcome section and show questions
function startGame() {
    // console.log("started");
startPageEl.classList.add("hide");
questionBoxEl.classList.remove("hide");
var question = 0
}

function quiz(question)

function showQuestion () {
    if()
}
    
}

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




