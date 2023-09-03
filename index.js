const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissor");
const image = document.querySelector(".user");
const aiimage = document.querySelector(".ai");
const scoreElement = document.getElementById("score");

let choice = '';
let aiChoice = '';
let score = 0;
let round = 0;

function getRandomAIChoice() {
    const l = ['rock', 'paper', 'scissors'];
    const x = Math.floor(Math.random() * l.length);
    return l[x];
}

function displayimageAI() {
    aiChoice = getRandomAIChoice();

    const aiDiv = document.createElement("div");
    aiDiv.style.textAlign = "center";
    aiDiv.style.fontSize = "1.5em";

    const aichoiceText = document.createElement("p");
    aichoiceText.textContent = 'AI: ' + aiChoice.toUpperCase();
    aichoiceText.style.marginBottom = "20px";

    const aiuserImage = document.createElement("img");
    aiuserImage.src = `./${aiChoice}.png`;
    aiuserImage.alt = aiChoice.toUpperCase();
    aiuserImage.style.height = "200px";
    aiuserImage.style.width = "200px";

    aiimage.innerHTML = '';

    aiDiv.appendChild(aichoiceText);
    aiDiv.appendChild(aiuserImage);

    aiimage.appendChild(aiDiv);
}

function displayimage(choice) {
    const userDiv = document.createElement("div");
    userDiv.style.textAlign = "center";
    userDiv.style.fontSize = "1.5em";

    const choiceText = document.createElement("p");
    choiceText.textContent = 'YOUR CHOICE: ' + choice.toUpperCase();
    choiceText.style.marginBottom = "20px";

    const userImage = document.createElement("img");
    userImage.src = `./${choice}.png`;
    userImage.alt = choice.toUpperCase();
    userImage.style.height = "200px";
    userImage.style.width = "200px";

    image.innerHTML = '';

    userDiv.appendChild(choiceText);
    userDiv.appendChild(userImage);

    image.appendChild(userDiv);
}

function updateScore(result) {
    if (result === "win") {
        score += 10;
    } else if (result === "lose") {
        score -= 5;
    }
    round += 1;
    scoreElement.textContent = "SCORE: " + score;
}

function playRound(playerChoice) {
    choice = playerChoice;
    displayimage(choice);
    displayimageAI();

    if (choice === aiChoice) {
        console.log("score:", score, "round: ", round, "ITS A DRAW");
    } else if (
        (choice === "rock" && aiChoice === "scissors") ||
        (choice === "paper" && aiChoice === "rock") ||
        (choice === "scissors" && aiChoice === "paper")
    ) {
        console.log("score:", score, "round: ", round, "ITS A WIN");
        updateScore("win");
    } else {
        console.log("score:", score, "round: ", round, "ITS A LOSE");
        updateScore("lose");
    }
}

rock.addEventListener("click", () => {
    playRound("rock");
});

paper.addEventListener("click", () => {
    playRound("paper");
});

scissors.addEventListener("click", () => {
    playRound("scissors");
});
