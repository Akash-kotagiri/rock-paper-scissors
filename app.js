let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreValue = document.querySelector("#user-score");
const compScoreValue = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];

}
const drawGame = () => {
    console.log("Game was draw.");
    msg.innerHTML = "Game was Draw. Play Again! &#x1F5FF";
    msg.style.backgroundColor = "skyblue";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScoreValue.innerText = userScore;
        msg.innerHTML = `You Win! &#128293 your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++
        compScoreValue.innerText = compScore;
        msg.innerHTML = `You lose &#128577 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genComputerChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});