const readline = require('readline');

// 1. create a function that randomly returns either 'rock', 'paper', or 'scissors'
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

// 2. create a function that compares the user's choice and the computer's choice and returns a string that declares the winner
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "It's a tie!";
    } else if (player === 'rock' && computer === 'scissors') {
        return "You win! Rock beats scissors!";
    } else if (player === 'rock' && computer === 'paper') {
        return "You lose! Paper beats rock!";
    } else if (player === 'paper' && computer === 'rock') {
        return "You win! Paper beats rock!";
    } else if (player === 'paper' && computer === 'scissors') {
        return "You lose! Scissors beats paper!";
    } else if (player === 'scissors' && computer === 'paper') {
        return "You win! Scissors beats paper!";
    } else if (player === 'scissors' && computer === 'rock') {
        return "You lose! Rock beats scissors!";
    } else {
        return "Invalid input. Please enter 'rock', 'paper', or 'scissors'.";
    }
}

// 3. create a function that plays the game 5 times and keeps track of the score
function game() {
    let playerScore = 0;
    let computerScore = 0;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Rock, paper, or scissors? ", function(playerSelection) {
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        console.log(round);

        if (round.includes("win")) {
            playerScore++;
        } else if (round.includes("lose")) {
            computerScore++;
        }

        rl.question("Rock, paper, or scissors? ", function(playerSelection) {
            let computerSelection = computerPlay();
            let round = playRound(playerSelection, computerSelection);
            console.log(round);

            if (round.includes("win")) {
                playerScore++;
            } else if (round.includes("lose")) {
                computerScore++;
            }

            rl.question("Rock, paper, or scissors? ", function(playerSelection) {
                let computerSelection = computerPlay();
                let round = playRound(playerSelection, computerSelection);
                console.log(round);

                if (round.includes("win")) {
                    playerScore++;
                } else if (round.includes("lose")) {
                    computerScore++;
                }

                rl.question("Rock, paper, or scissors? ", function(playerSelection) {
                    let computerSelection = computerPlay();
                    let round = playRound(playerSelection, computerSelection);
                    console.log(round);

                    if (round.includes("win")) {
                        playerScore++;
                    } else if (round.includes("lose")) {
                        computerScore++;
                    }

                    rl.question("Rock, paper, or scissors? ", function(playerSelection) {
                        let computerSelection = computerPlay();
                        let round = playRound(playerSelection, computerSelection);
                        console.log(round);

                        if (round.includes("win")) {
                            playerScore++;
                        } else if (round.includes("lose")) {
                            computerScore++;
                        }

                        console.log(`Player score: ${playerScore}`);
                        console.log(`Computer score: ${computerScore}`);

                        if (playerScore > computerScore) {
                            console.log("You win!");
                        } else if (playerScore < computerScore) {
                            console.log("You lose!");
                        } else {
                            console.log("It's a tie!");
                        }

                        rl.close();
                    });
                });
            });
        });
    });
}

game();

// 4. create a function that declares the winner of the game based on the score
function declareWinner() {

}

// Path: src\main.js