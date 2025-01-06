const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let humanScore = 0;
let computerScore = 0;
let round = 1;

console.log(`Starting 5 match round between Human and Computer`);

while (round < 6) {
  console.log(`Round -> ${round} started`);
  game();
  round++;
}

if (humanScore > computerScore) {
  console.log(
    `Humans score ${humanScore}, Computer score ${computerScore}, Humans Won!!`
  );
  alert(
    `Humans score ${humanScore}, Computer score ${computerScore}, Humans Won!!`
  );
} else if (humanScore < computerScore) {
  console.log(
    `Humans score ${humanScore}, Computer score ${computerScore}, Computer Won!!`
  );
  alert(
    `Humans score ${humanScore}, Computer score ${computerScore}, Computer Won!!`
  );
} else {
  console.log(
    `Humans score ${humanScore}, Computer score ${computerScore}, Tie, Nobody won`
  );
  alert(
    `Humans score ${humanScore}, Computer score ${computerScore}, Tie, Nobody won`
  );
}

function game() {
  const userInput = prompt("Rock, Paper, Scissors -> Choose one")
    .trim()
    .toLowerCase();

  function validateUserInput(userInput) {
    if (
      !(
        userInput.includes(ROCK) ||
        userInput.includes(PAPER) ||
        userInput.includes(SCISSORS)
      )
    ) {
      console.error(
        `Your input(${userInput}) is wrong, accepted values Rock, Paper, Scissors`
      );
      return false;
    }
    return true;
  }

  function getRandomDigit() {
    return Math.floor(Math.random() * 3);
  }

  function getComputerChoice() {
    const randomValue = getRandomDigit();
    switch (randomValue) {
      case 0:
        return ROCK;
      case 1:
        return PAPER;
      case 2:
        return SCISSORS;
      default:
        console.log(randomValue);
    }
  }

  const computerChoice = getComputerChoice();

  console.log(`Computer chose ${computerChoice}`);

  function matchResult() {
    if (validateUserInput(userInput)) {
      console.log(`You chose ${userInput}`);

      if (userInput === computerChoice) {
        console.log("Tie");
      } else if (
        (userInput === ROCK && computerChoice === SCISSORS) ||
        (userInput === PAPER && computerChoice === ROCK) ||
        (userInput === SCISSORS && computerChoice === PAPER)
      ) {
        console.log(`${userInput} beats ${computerChoice}, User Won`);
        humanScore++;
      } else {
        console.log(`${computerChoice} beats ${userInput}, Computer Won`);
        computerScore++;
      }
    }
  }

  matchResult();

  console.log(`Human score ${humanScore}, Computer score ${computerScore}`);
}
