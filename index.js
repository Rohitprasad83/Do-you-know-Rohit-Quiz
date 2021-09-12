var readlineSync = require("readline-sync");
const chalk = require('chalk');
var highScores = [
  {
    name: "Ayush",
    score: "5",
  },
  {
    name: "Prasad",
    score: "4",
  }

]
var questions = [
  {
    question: "Which city does Rohit live?  ",
    answer: "Kolkata",
  },
  {
    question: "How old Rohit is? ",
    answer: "22",
  },
  {
    question: "Who is Rohit's Favourite Cricketer? ",
    answer: "Dhoni",
  },
  {
    question: "In which city Rohit was born? ",
    answer: "Kolkata",
  },
  {
    question: "Which Sport does Rohit like the most? ",
    answer: "Cricket"
  },
]

var score = 0;

function welcome() {
  var userName = readlineSync.question(chalk.yellow("Enter your Name "));
  console.log("Welcome", chalk.green(userName),"to Do you know Rohit! "); 
}


function play(question, answer)
{
  var userAnswer = readlineSync.question(chalk.yellow(question));

  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green("Your Answer is correct! "));
    score++;
  }
  else
  {
    console.log(chalk.red("Your Answer is Wrong! "));
  }

  console.log("Current Score", chalk.green(score));
  console.log("--------------------");
}

function game(){
  for(var i = 0; i < questions.length; i++)
  {
    play(questions[i].question, questions[i].answer);
  }
}

function showFinalScore()
{
  console.log("Your score is ", chalk.green(score));
  console.log(chalk.blue("Check out the high scores, if you have beaten the highest score then ping me with a screenshot and I'll update it"));
  for(var i = 0; i < highScores.length; i++)
  {
    console.log(chalk.magenta(highScores[i].name, " ", highScores[i].score));
  }
}


welcome();
game();
showFinalScore();