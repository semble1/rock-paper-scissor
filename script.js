conditions = {
    Rock: "Scissor",
    Paper: "Rock",
    Scissor: "Paper"
}

outcome = {
    1: 'WIN',
    0: 'TIE',
    '-1': 'LOSE'
}

let playerpoint = 0;
let aipoint = 0;

const start = document.querySelector(".start");
const hide = document.querySelectorAll(".hide");
const btns = document.querySelectorAll(".play");
const gogame = document.querySelector(".game");
const container = document.querySelector(".container");
const choice = document.createElement('div');
const gamescore = document.createElement('div');
const numscorep = document.createElement('div');
const numscorea = document.createElement('div');
const result = document.createElement('div');

start.onclick = function() {remove()};
function remove() {
    hide.forEach((hid) => {
        hid.classList.toggle("hide");
    });
    start.classList.toggle("hide");
}

function computerPlay() {
    let keys = Object.keys(conditions);
    return conditions[keys[Math.floor(keys.length * Math.random())]];
}

function playRound(playerSelection, computerSelection) {
    choice.classList.add('choice');
    choice.textContent = "You: " + playerSelection + ' ' + "AI: " + computerSelection;
    container.appendChild(choice);
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

    gogame.onclick = function() {game(play)};
}

function game(play) {
    const playerSelection = play;
    const computerSelection = computerPlay();
    let score = playRound(playerSelection, computerSelection);

    if (score === 1) {
        playerpoint = playerpoint+1;
    }
    else if (score === -1) {
        aipoint = aipoint+1;
    }

    numscorep.classList.add('numscorep');
    numscorep.textContent = playerpoint;
    container.appendChild(numscorep);

    numscorea.classList.add('numscorea');
    numscorea.textContent = aipoint;
    container.appendChild(numscorea);

    gamescore.classList.add('gamescore');
    gamescore.textContent = outcome[score];
    container.appendChild(gamescore);

    if (playerpoint === 5 && aipoint < 5) {
        result.classList.add('result');
        result.textContent = "YOU WIN!";
        container.appendChild(result);
        remove();
        start.innerHTML = "RESTART";
        start.onclick = function() {document.location.reload(true)};
    }
    else if (aipoint === 5 && playerpoint < 5) {
        result.classList.add('result');
        result.textContent = "YOU LOSE!";
        container.appendChild(result);
        remove();
        start.innerHTML = "RESTART";
        start.onclick = function() {document.location.reload(true)};
    }
}