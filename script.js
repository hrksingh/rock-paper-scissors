const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
let humanScore = 0;
let computerScore = 0;
let round = 1;

const rspButtons = document.querySelectorAll(".rsp-button");
const resetButton = document.getElementById("reset");

rspButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const userInput = button.textContent.toUpperCase();
    disableButtons(rspButtons);
    const computerChoice = getComputerChoice();
    displayChoice(".human-choice", userInput);
    displayChoice(".computer-choice", computerChoice);
    const result = getResult(userInput, computerChoice);
    updateScores(result);

    if (round === 5) {
      updateRound(round++);
      disableButtons(rspButtons);
      displayResult();
      const resetButton = document.getElementById("reset");
      resetButton.style.display = "block";
    } else {
      updateRound(round++);
      enableButtons(rspButtons);
    }
  });
});

resetButton.addEventListener("click", () => {
  round = 1;
  humanScore = 0;
  computerScore = 0;
  updateRound(round);
  enableButtons(rspButtons);
  document.querySelector(".human-choice").textContent = "You Choose: ";
  document.querySelector(".computer-choice").textContent = "Computer Choose: ";
  document.querySelector(".res-container").textContent = "Result: ";
  const resetButton = document.getElementById("reset");
  resetButton.style.display = "none";
});

function updateRound(round) {
  document.getElementById("round-number").textContent = round;
}

function disableButtons(buttons) {
  buttons.forEach((btn) => (btn.disabled = true));
}

function enableButtons(buttons) {
  buttons.forEach((btn) => (btn.disabled = false));
}

function getComputerChoice() {
  const choices = [ROCK, PAPER, SCISSORS];
  return choices[Math.floor(Math.random() * choices.length)];
}

function displayChoice(selector, choice) {
  const element = document.querySelector(selector);
  element.textContent = `You Choose: ${choice}`;
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "Tie";
  if (
    (userChoice === ROCK && computerChoice === SCISSORS) ||
    (userChoice === PAPER && computerChoice === ROCK) ||
    (userChoice === SCISSORS && computerChoice === PAPER)
  ) {
    return "User Won";
  }
  return "Computer Won";
}

function displayResult() {
  let result;
  if (humanScore < computerScore) {
    result = "Computer Won";
  } else {
    result = "Human Won";
  }
  const resultContainer = document.querySelector(".res-container");
  resultContainer.textContent = `Result: ${result}`;
}

function updateScores(result) {
  if (result === "User Won") humanScore++;
  if (result === "Computer Won") computerScore++;
  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
}
