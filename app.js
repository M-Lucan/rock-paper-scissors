let wins = 0;
let losses = 0;
let ties = 0;
const choices = ['rock', 'paper', 'scissors'];

function getRandomIndex(max){
    return Math.floor(Math.random() * max);
}

function computerChoice(choices){
    const index = getRandomIndex(choices.length);
    return choices[index];
}

function updateScore(){
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('ties').textContent = ties;
}

function playtheGame(playerSelection){
    const computerSelection = computerChoice(choices);
    let result;

    switch (playerSelection) {
        case computerSelection:
            result = "It's a TIE, " + computerSelection + " vs " + playerSelection;
            ties++;
            break;

        case 'rock':
            if (computerSelection === 'scissors') {
                result = "You WIN, rock beats scissors.";
                wins++;} 
            else{
                result = "You LOSE, " + computerSelection + " beats rock.";
                losses++;}
            break;

        case 'paper':
            if (computerSelection === 'rock'){
                result = "You WIN, paper beats rock.";
                wins++;} 
            else{
                result = "You LOSE, " + computerSelection + " beats paper.";
                losses++;}
            break;

        case 'scissors':
            if (computerSelection === 'paper'){
                result = "You WIN, scissors beats paper.";
                wins++;} 
            else{
                result = "You LOSE, " + computerSelection + " beats scissors.";
                losses++;}
            break;

        default:
            result = "Invalid selection!";
    }

    document.getElementById("result").textContent = result;
    updateScore();
}

const playerChoiceImages = document.querySelectorAll('.choice-images');

for (let i = 0; i < playerChoiceImages.length; i++){
    playerChoiceImages[i].addEventListener('click', function(event) {
        playtheGame(event.target.alt.toLowerCase());
    });
}