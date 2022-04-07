conditions = {
    Rock: "Scissor",
    Paper: "Rock",
    Scissor: "Paper"
}

result = {
    1: 'WIN',
    0: 'TIE',
    '-1': 'LOSE'
}

const btns = document.querySelectorAll(".play");
const gogame = document.querySelector(".game");
const container = document.querySelector(".container");
const choice = document.createElement('div');
const gamescore = document.createElement('div');

function computerPlay() {
    let keys = Object.keys(conditions);
    return conditions[keys[Math.floor(keys.length * Math.random())]];
}

function playRound(playerSelection, computerSelection) {
    choice.classList.add('choice');
    choice.textContent = "You: " + playerSelection + ' ' + "AI: " + computerSelection;
    container.appendChild(choice);
    console.log(playerSelection, computerSelection);
    if (conditions[playerSelection] === computerSelection) {
        return 1;
    }
    else if (conditions[computerSelection] === playerSelection) {
        return -1;
    }
    else {
        return 0;
    }
}

btns.forEach((btn) => {
    btn.onclick = function() {playerPlay(btn.id)};
})

function playerPlay(id) {
    let play = document.getElementById(id).innerHTML;

    gogame.onclick = function() {game()};

    function game() {
        const playerSelection = play;
        const computerSelection = computerPlay();
        let score = playRound(playerSelection, computerSelection);
        gamescore.classList.add('gamescore');
        gamescore.textContent = score;
        container.appendChild(gamescore);
        console.log(score);
    }
}