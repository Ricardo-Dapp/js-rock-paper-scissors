// Variables
let score = 0;
let result;
const choiceArray = ["rock", "paper", "scissors"];

// DOM elements
const gameButtons = document.querySelectorAll("game-button");
const resetButton = document.getElementById("reset-button");
const playerScoreHeader = document.getElementById("player-score");
const choicesHeader = document.getElementById("choices");
const resultHeader = document.getElementById("result");

//Functions
function game(playerChoice) {
  const computerChoice = choiceArray[Math.floor(Math.random() * 3)];

  // all rock outcomes
  if (playerChoice == "rock" && computerChoice == "rock") {
    result = "Draw!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    result = "Lose!";
    score--;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    result = "Win!";
    score++;
  }

  //all paper outcomes
  if (playerChoice == "paper" && computerChoice == "rock") {
    result = "Win!";
    score++;
  } else if (playerChoice === "paper" && computerChoice === "paper") {
    result = "Draw!";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    result = "Lose!";
    score--;
  }

  //all scissors outcomes
  if (playerChoice == "scissors" && computerChoice == "rock") {
    result = "Lose!";
    score--;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    result = "Win!";
    score++;
  } else if (playerChoice === "scissors" && computerChoice === "scissors") {
    result = "Draw!";
  }

  displayResults(playerChoice, computerChoice);

  console.log(playerChoice, computerChoice, result);
}

// Updates the DOM to display your score, if you won, and the choice the player/robot made.
function displayResults(playerChoice, computerChoice) {
  playerScoreHeader.innerText = `Score: ${score}`;
  resultHeader.innerText = `Result: ${result}`;
  choicesHeader.innerText = `Player's Choice: ${playerChoice} VS. Computer's Choice: ${computerChoice} `;
}

// removes and resets score, result, and choices
function reset() {
  score = 0;
  result = "";
  playerScoreHeader.innerText = "";
  resultHeader.innerText = result;
  choicesHeader.innerText = "";
}
