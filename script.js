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

function computerPlay() {
    let keys = Object.keys(conditions);
    return conditions[keys[Math.floor(keys.length * Math.random())]];
}

function playRound(playerSelection, computerSelection) {
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

function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const btnrock = document.querySelector('.rock');
btnrock.onclick = function() {playerPlay()};

function playerPlay() {
    let play = prompt("Rock, Paper, or Scissor?");
    return(titleCase(play));
}

function game(number_of_games) {
    for (let i = 0; i < number_of_games; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        let score = playRound(playerSelection, computerSelection);
        console.log(score);
    }
}