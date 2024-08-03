let gameSequence = [];
let userSequence = [];
let colors = ["green", "red", "yellow", "blue"];
let gameStart = false;
let level = 0;
let totalScore = 0;
let remarks = document.querySelector(".remarks");
let body = document.querySelector("body");
let buttons = document.querySelectorAll(".btn");
body.style.pointerEvents = "none";

function gameOver() {
    remarks.innerText = `Game Over! Your total score is ${totalScore}. Press any key to play again!`;
    body.style.pointerEvents = "none";
    reset();
}

function reset() {
    gameStart = false;
    level = 0;
    totalScore = 0;
    userSequence = [];
    gameSequence = [];
}

function checkSequence(index) {
    if (gameSequence[index] === userSequence[index]) {
        if (userSequence.length === gameSequence.length) {
            totalScore += 10;
            setTimeout(levelUp(), 2000);
        }
    }
    else {
        gameOver();
    }
}

for (button of buttons) {
    button.addEventListener("click", function () {
        let userColor = this.getAttribute("id");
        userSequence.push(userColor);
        checkSequence(userSequence.length - 1);
    });
}

body.addEventListener("keypress", function () {
    if (gameStart == false) {
        gameStart = true;
        levelUp();
        body.removeAttribute("style");
    }
});

function levelUp() {
    userSequence = [];
    level++;
    remarks.innerText = `Level ${level}`;
    randomButton();
}

function flashButton(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1000);
}

function randomButton() {
    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = colors[randomIndex];
    let randomButton = document.querySelector(`.${randomColor}`);
    gameSequence.push(randomColor);
    flashButton(randomButton);
}


