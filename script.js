// Starting the quiz

let startQuizBtn = document.querySelector("start-quiz");
let notReadyBtn = document.querySelector("Not Ready");

//Quiz section

let quiz = document.querySelector("quiz");
let time = document.querySelector("time");

//Question Section

let question = document.querySelector("questionNo");
let questionText = document.querySelector("questionText");

//Answers list

let answer1 = document.querySelector("answer1");
let answer2 = document.querySelector("answer2");
let answer3 = document.querySelector("answer3");
let answer4 = document.querySelector("answer4");

//Result section\
let result = document.querySelector("result");
let score = document.querySelector("score");
let replay = document.querySelector("replay");

// All the questions

let questionChoice = document.querySelector(".questionChoice");

let index = 0;
let timer = 60;
let interval = 0;

//total points

let correct = 0;

//Storing Answer Value
let UserAns = undefined;

//This is what happen when the Start button is pressed
document.getElementById("start-quiz").addEventListener("click", () => {
  instruction.style.display = "none";
  quiz.style.display = "none";
});

var countdown = function () {
  console.log(timer);
  timer--;
  if (timer === 0) {
    console.log("blastoff");
    clearInterval(startCountdown);
  }
};
//var startCountdown = setInterval(countdown, 1000);

//Creating timer

/*let countDown = () => {
  if (timer === 75) {
    clearInterval(interval);
  } else {
    timer++;
    console.log(timer);
  }
};
//setInterval(countDown, 1000);*/

let loadData = () => {
  questionNo.innerText = index + 1 + ". ";
  questionText.innerText = allQuestions[index].question;
  answer1.innerText = allQuestions[index].choice1;
  answer2.innerText = allQuestions[index].choice2;
  answer3.innerText = allQuestions[index].choice3;
  answer4.innerText = allQuestions[index].choice4;
};
loadData();
