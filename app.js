let playerWins = 0;
    let computerWins = 0;

    function playGame(playerChoice) {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let resultMessage = `Computer chose: ${computerChoice}<br>`;

        if ((playerChoice === "rock" && computerChoice === "scissors") || 
            (playerChoice === "scissors" && computerChoice === "paper") || 
            (playerChoice === "paper" && computerChoice === "rock")) {
            playerWins++;
            resultMessage += "You won this round!";
        } else if (playerChoice === computerChoice) {
            resultMessage += "It's a tie!";
        } else {
            computerWins++;
            resultMessage += "Computer won this round!";
        }

        resultMessage += `<br>Player: ${playerWins}, Computer: ${computerWins}`;

        if (playerWins === 2 || computerWins === 2) {
            if (playerWins > computerWins) {
                resultMessage += "<br><strong>Congratulations! You won the best of three.</strong>";
            } else {
                resultMessage += "<br><strong>Computer won the best of three. Better luck next time!</strong>";
            }

            // Reset the game
            playerWins = 0;
            computerWins = 0;
        }

        document.getElementById("result").innerHTML = resultMessage;
    }


