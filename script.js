function getComputerChoice () {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Sissors";
    default:
      return "bad logic"
  }
}

function round (player) {
  let computer = getComputerChoice();
  let results = document.querySelector("#results");

  switch (computer) {
    case "Rock":
      switch (player) {
        case "rock":
          results.textContent = "You tie! Rock and Rock."
          return 0;
        case "paper":
          results.textContent = "You win! Paper beats Rock"
          return 1;
        case "sissors":
          results.textContent = "You Lose! Rock beats Sissors"
          return 2;
        default:
          results.textContent = "bad logic"
      }
    case "Paper":
      switch (player) {
        case "rock":
          results.textContent = "You lose! Paper beats Rock"
          return 2;
        case "paper":
          results.textContent = "You tie! Paper and Paper."
          return 0;
        case "sissors":
          results.textContent = "You win! Sissors beat Paper"
          return 1;
        default:
          results.textContent = "bad logic"
      }
    case "Sissors":
      switch (player) {
        case "rock":
          results.textContent = "You win! Rock beats Sissors"
          return 1;
        case "paper":
          results.textContent = "You Lose! Sissors beats Paper"
          return 2;
        case "sissors":
          results.textContent = "You tie! Sissors and Sissors."
          return 0;
        default:
          results.textContent = "bad logic"
      }
    default:
      return "bad logic"
  }
}

function game() {
  const playerChoices = document.querySelectorAll("button");
  const winner = document.querySelector("#winner");

  let playerScore = 0;
  let computerScore = 0;

  playerChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
      let score = document.querySelector("#score");
      let result = round(choice.id);
      if (result === 1) {
        playerScore++;
      }
      else if (result === 2) {
        computerScore++;
      }
      score.textContent = `Your Score: ${playerScore}
                           Computer Score: ${computerScore}`;
      if (playerScore === 5) {
        winner.textContent = "You win the game!"
      }
      else if (computerScore === 5) {
        winner.textContent = "You lose the game!"
      }
    })
  })
}
game()