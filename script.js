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
  switch (computer) {
    case "Rock":
      switch (player) {
        case "rock":
          console.log("You tie! Rock and Rock.")
          return 0;
        case "paper":
          console.log("You win! Paper beats Rock")
          return 1;
        case "sissors":
          console.log("You Lose! Rock beats Sissors")
          return 2;
        default:
          console.log("bad logic")
      }
    case "Paper":
      switch (player) {
        case "rock":
          console.log("You lose! Paper beats Rock")
          return 2;
        case "paper":
          console.log("You tie! Paper and Paper.")
          return 0;
        case "sissors":
          console.log("You win! Sissors beat Paper")
          return 1;
        default:
          console.log("bad logic")
      }
    case "Sissors":
      switch (player) {
        case "rock":
          console.log("You win! Rock beats Sissors")
          return 1;
        case "paper":
          console.log("You Lose! Sissors beats Paper")
          return 2;
        case "sissors":
          console.log("You tie! Sissors and Sissors.")
          return 0;
        default:
          console.log("bad logic")
      }
    default:
      return "bad logic"
  }
}

function game() {
  const playerChoices = document.querySelectorAll("button");

  playerChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
      round(choice.id)
    })
  })
}
game()