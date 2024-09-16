let playerWins = 0;
let computerWins = 0;

function playGame(playerChoice) {
    fetch('/play', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({choice: playerChoice})
    })
    .then(response => response.json())
    .then(data => {
        const computerChoice = data.computer_choice;
        const result = data.result;
        
        document.getElementById("result").innerHTML = `Computer chose: ${computerChoice}<br>`;
        
        if (result === "Player") {
            playerWins++;
            document.getElementById("result").innerHTML += "You won this round!";
        } else if (result === "Computer") {
            computerWins++;
            document.getElementById("result").innerHTML += "Computer won this round!";
        } else {
            document.getElementById("result").innerHTML += "It's a tie!";
        }

        document.getElementById("result").innerHTML += `<br>Player: ${playerWins}, Computer: ${computerWins}`;

        if (playerWins === 2 || computerWins === 2) {
            if (playerWins > computerWins) {
                document.getElementById("result").innerHTML += "<br><strong>Congratulations! You won the best of three.</strong>";
            } else {
                document.getElementById("result").innerHTML += "<br><strong>Computer won the best of three. Better luck next time!</strong>";
            }

            // Reset the game
            playerWins = 0;
            computerWins = 0;
        }
    });
}