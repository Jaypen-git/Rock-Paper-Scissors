let a = 0;
let b = 0;

// make list of choices
const choices = ['rock', 'paper', 'scissors'];

//make function for computer to pick
function computerPlay(){
    // return a random list item from choices
    return Math.floor(Math.random()*choices.length);
};

// get reference to html elements
const result = document.querySelector('.result');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function rps(choice){
    // let cpu pick a choice
    let cpu = choices[computerPlay()];
    // compare your answer to cpu
    switch (choice){
        // if your choice was rock, run this code etc.
        case 'rock':
            if (cpu === 'scissors'){
                // run this if player won etc.
                result.innerHTML = `The CPU chose ${cpu}, You won!`;
                a++;
                playerScore.innerHTML = a;
            } else if (cpu === 'rock'){
                result.innerHTML = `Both you and the CPU chose ${cpu}, It was a tie!`;
            } else {
                result.innerHTML = `The CPU chose ${cpu}, You lost!`;
                b++;
                cpuScore.innerHTML = b;
            };
            break;
        case 'paper':
            if (cpu === 'rock'){
                result.innerHTML = `The CPU chose ${cpu}, You won!`;
                a++;
                playerScore.innerHTML = a;
            } else if (cpu === 'paper'){
                result.innerHTML = `Both you and the CPU chose ${cpu}, It was a tie!`;
            } else {
                result.innerHTML = `The CPU chose ${cpu}, You lost!`;
                b++;
                cpuScore.innerHTML = b;
            };
            break;
        case 'scissors':
            if (cpu === 'paper'){
                result.innerHTML = `The CPU chose ${cpu}, You won!`;
                a++;
                playerScore.innerHTML = a;
            } else if (cpu === 'scissors'){
                result.innerHTML = `Both you and the CPU chose ${cpu}, It was a tie!`;
            } else {
                result.innerHTML = `The CPU chose ${cpu}, You lost!`;
                b++;
                cpuScore.innerHTML = b;
            };
            break;
        default:
            result.innerHTML = 'There was an error';
    };
};

// run this code on button click
rock.addEventListener('click', () => {
    rps('rock');
});

paper.addEventListener('click', () => {
    rps('paper');
});

scissors.addEventListener('click', () => {
    rps('scissors');
});

// keep score
const playerScore = document.querySelector('.playerScore');
const cpuScore = document.querySelector('.cpuScore');