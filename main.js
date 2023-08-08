//Create a rock, paper, scissors game that runs in the console.
// 1. User makes a choice
// 2. Computer makes a choice
// 3. Display the winner of each round, declaring what the computer chose and what the user chose
// 5. Keep score
// 6. Play best of 3 games
// Ask to play again

const readline = require('readline');

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return "You lose! Paper beats rock.";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "You win! Rock beats scissors.";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "You win! Paper beats rock.";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "You lose! Scissors beats paper.";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "You lose! Rock beats scissors.";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "You win! Scissors beats paper.";
  }
}

function game() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let playerScore = 0;
  let computerScore = 0;

  rl.write("Let's play rock, paper, scissors!\n");

  const playRoundAsync = () => {
    rl.question("Choose rock, paper, or scissors: ", (playerSelection) => {
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      process.stdout.write(`${result}\n`);

      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }

      if (playerScore === 3 || computerScore === 3) {
        rl.write(`Final score: You ${playerScore}, Computer ${computerScore}\n`);
        if (playerScore > computerScore) {
          rl.write("You win the game!\n");
        } else {
          rl.write("You lose the game!\n");
        }
        rl.close();
      } else {
        rl.write(`Score: You ${playerScore}, Computer ${computerScore}\n`);
        playRoundAsync();
      }
    });
  };

  playRoundAsync();
}

game();