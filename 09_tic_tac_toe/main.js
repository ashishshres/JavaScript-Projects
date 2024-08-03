const ticTacToe = document.querySelector(".container");
const boxes = document.querySelectorAll(".box");
const message = document.querySelector("h1");
const restartBtn = document.querySelector(".restart");
let countTurns = 0;
// console.log(message);
// console.log(ticTacToe);

let currentPlayer = "X";
let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function switchPlayer(e) {
    // console.log(e.target.className);
    if (e.target.className !== "container") {
        if (e.target.innerText === "") {
            e.target.textContent = currentPlayer;
            countTurns++;
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
    }

    if (countTurns === 9) {
        message.textContent = "Draw";
    }
}

function checkWinner() {
    winningConditions.forEach(function (item) {
        let index0 = item[0];
        let index1 = item[1];
        let index2 = item[2];
        let value0 = boxes[index0].textContent;
        let value1 = boxes[index1].textContent;
        let value2 = boxes[index2].textContent;
        // console.log(index0, value0, index1, value2, index2, value2);

        if (value0 !== "" && value1 !== "" && value2 !== "") {
            if (value0 === value1 && value0 === value2) {
                boxes[index0].classList.add("winner");
                boxes[index1].classList.add("winner");
                boxes[index2].classList.add("winner");
                message.textContent = `Winner is ${value0}`;
                endGame();
            }
        }
    });
}

function startGame(e) {
    switchPlayer(e);
    checkWinner();
}

function endGame() {
    ticTacToe.removeEventListener("click", startGame);
}

function reset() {
    message.textContent = "TicTacToe";
    currentPlayer = "X";
    countTurns = 0;

    boxes.forEach(function (box) {
        box.textContent = "";
        box.classList.remove("winner");
    });
    ticTacToe.addEventListener("click", startGame);
}

ticTacToe.addEventListener("click", startGame);
restartBtn.addEventListener("click", reset);
