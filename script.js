const rock = document.getElementById("rock"),
      paper = document.getElementById("paper"),
      scissor = document.getElementById("scissor"),
      yourMove = document.getElementById("your-move"),
      computerMove = document.getElementById("computer-move"),
      result = document.getElementById("result-panel"),
      score = document.getElementById("score");

let scorePlay = 0;


score.innerHTML = scorePlay; 






const buttons = [rock, paper, scissor];




buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const playerChoice = e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1); // Capitalize first letter
        const options = ["Rock", "Paper", "Scissor"];
        const computerChoice = options[Math.floor(Math.random() * 3)]; 
        






        yourMove.innerHTML = `Your Move: <strong>${playerChoice}</strong>`;
        computerMove.innerHTML = `Computer Move: <strong>${computerChoice}</strong>`;




        if (playerChoice === computerChoice) 
          {
            displayResult("Draw", "draw");
        } else if (
            (playerChoice === "Rock" && computerChoice === "Paper")
             || 

            (playerChoice === "Paper" && computerChoice === "Scissor") 
            || 
            (playerChoice === "Scissor" && computerChoice === "Rock")

        ) {
            displayResult("You Lost!", "loser");

        } else {
            displayResult("You Win!", "winner");

            scorePlay++;
            score.innerHTML = scorePlay < 10 ? '0' + scorePlay : scorePlay; // Keep score formatted as 2-digits
        }
    });
});

/**

* @param {string} message - 


 * @param {string} resultClass 



 */
function displayResult(message, resultClass) {
    result.style.display = "block";

    result.className = 'result-panel'; 



    result.classList.add(resultClass);

    result.innerHTML = message;
}
