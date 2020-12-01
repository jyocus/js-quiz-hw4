const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started');
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -  .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct 
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
nextButton.classList.remove('hide')
} else{
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//Questions Array
const questions = [ {
    question:"What is 1+1",
    answers: [
        { text: "2", correct: true },
        { text: "4", correct: false },
        { text: "6", correct: false },
        { text: "8", correct: false }
    ],
},{
    question:"What is 2+2",
    answers: [
        { text: "2", correct: true },
        { text: "4", correct: false },
        { text: "6", correct: false },
        { text: "8", correct: false }
    ],
},{
    question:"What is 4+4",
    answers: [
        { text: "2", correct: true },
        { text: "4", correct: false },
        { text: "6", correct: false },
        { text: "8", correct: false }
    ]
}

]






// var startButton = document.getElementById("start-btn");
// var startPageEl = document.querySelector(".container");
// var questionBoxEl = document.getElementById("question-box");
// var questionEL = document.getElementById("question-container");
// var answerButtonEl = document.getElementById("answer-buttons");
// // var timeEL = document.querySelector("#timer");
// // var secondsLeft = 60

// //let because these will need to be altered later
// let randQuestions, questionIndex

// startButton.addEventListener("click", startGame);


// //function to start the game, hide welcome section and show questions
// function startGame() {
// startPageEl.classList.add("hide");
// randQuestions = questions.sort(() => Math.random() - .5)
// questionIndex = 0
// questionBoxEl.classList.remove("hide");
// startQuestions()
// }

// function startQuestions() {
//     // emptyBox()
//     showNextQuestion(randQuestions[questionIndex]);
// }
// //running text on this ... keeps failing as an unexpected identifier 
//     function showNextQuestion(question)
//     questionEL.innerText = question.question
// // function emptyBox() {
    
// // }

// // function setTime() {
// //     var timerInterval = setInterval(function() {
// //       secondsLeft--;
// //       timeEl.textContent = secondsLeft 
  
// //       if(secondsLeft === 0) {
// //         clearInterval(timerInterval);
// //         sendMessage();
// //       }
  
// //     }, 1000);
// // }

//Questions Array
// var questions = [ {
//     question:"What is 1+1",
//     choices: [
//         { text: "2", correct: true },
//         { text: "4", correct: false },
//         { text: "6", correct: false },
//         { text: "8", correct: false }
//     ],
// },{
//     question:"What is 2+2",
//     choices: [
//         { text: "2", correct: true },
//         { text: "4", correct: false },
//         { text: "6", correct: false },
//         { text: "8", correct: false }
//     ],
// },{
//     question:"What is 4+4",
//     choices: [
//         { text: "2", correct: true },
//         { text: "4", correct: false },
//         { text: "6", correct: false },
//         { text: "8", correct: false }
//     ]
// }

// ]

