let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userNumber = document.querySelector("#guessField");
const guessLot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userNumber.value);
        validateGuess(guess);
    });
}

// check if the guess is valid or not, not a negative number, or number greater than guess range
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a positive number");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        previousGuess.push(guess);
        if (numGuess === 11) {
            // displayGuess(guess);
            displayGuess(`Game Over! Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

//  check if the guess is correct or not, low or high than the number to be guessed
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(
            `You guessed it right! Random number is ${randomNumber}`
        );
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is LOW`);
    } else {
        displayMessage(`Number is HIGH`);
    }
}

function displayGuess(guess) {
    userNumber.value = "";
    guessLot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userNumber.value = "";
    userNumber.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener("click", (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuess = [];
        numGuess = 1;
        guessLot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess}`;
        userNumber.removeAttribute("disabled");
        startOver.removeChild(p);
        displayMessage("");
        playGame = true;
    });
}
