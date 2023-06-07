const readline = require('readline');

// Create a Rock, Paper, Scissors Game

let play = ["rock", "paper", "scissors"];
let wins = 0;
let losses = 0;
let draws = 0;
let rounds = 0;

let introduction = "Get ready – best of five rounds of rock, paper, and scissors are about to start! (User's consent not required.)";
console.log(introduction);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async function() {
  while (wins < 3 && losses < 3) {
    let hAnswer = ""; // initialize user's answer
    while (hAnswer !== "rock" && hAnswer !== "paper" && hAnswer !== "scissors") {
      await new Promise(resolve => rl.question("What do you choose, Rock, Paper or Scissors?", answer => {
        hAnswer = answer ? answer.toLowerCase() : ""; // convert to lowercase or empty string
        resolve();
      }));
    }

    let cAnswer = play[Math.floor(Math.random() * play.length)];
    console.log(`Computer has played ${cAnswer}.`);

    // Response for draw & counter
    if (hAnswer === cAnswer) {
      draws++;
      console.log(`It's a draw. We're keeping tabs... (${draws})`);
    }

    // Response for win & counter
    else if (
      (hAnswer == "rock" && cAnswer == "scissors") ||
      (hAnswer == "paper" && cAnswer == "rock") ||
      (hAnswer == "scissors" && cAnswer == "paper")
    ) {
      wins++;
      rounds++;
      console.log(`You have won ${wins} times, luck lol.`);
    }

    // Response for loss & counter
    else {
      losses++;
      rounds++;
      console.log(`You have lost ${losses} times ahaha!`);
    }
  }

  rl.close(); // close the readline interface

  if (wins >= 3) {
    console.log(`Game over, best of 5 - you won (${wins}-${losses})!`);
  } else {
    console.log(`Game over, best of 5 - you lost (${wins}-${losses})!`);
  }

  if (wins > losses) {
    console.log(`Congratulations, you won the game!`);
  } else if (wins < losses) {
    console.log(`Sorry, you lost the game.`);
  } else {
    console.log(`The game ended in a tie.`);
  }
})();