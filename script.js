var questionIndex =0 
var startButton = document.getElementById("start-btn")
var startPageEl = document.querySelector(".container")
var questionBoxEl = document.getElementById("questions")

startButton.addEventListener("click", startGame)

//function to start the game, hide welcome section and show questions
function startGame() {
    // console.log("started");
startPageEl.classList.add("hide");
questionBoxEl.classList.remove("hide");

}


var questions = [ {
    question:"What is 1+1",
    choices: [
        "2",
        "4",
        "6",
        "8"
    ],
    answer:"2"
},{
    question:"What is 2+2",
    choices: [
        "2",
        "4",
        "6",
        "8"
    ],
    answer:"2"
},{
    question:"What is 4+4",
    choices: [
        "2",
        "4",
        "6",
        "8"
    ],
    answer:"2"
}

]




