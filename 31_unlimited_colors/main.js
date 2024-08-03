const randomColor = function () {
    const hex = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomVal = Math.floor(Math.random() * hex.length);
        color += hex[randomVal];
    }
    return color;
};

// console.log(randomColor());

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
let intervalId;

const startChangeColor = function () {
    if (!intervalId) {
        intervalId = setInterval(function () {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
};
const stopChangeColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

startBtn.addEventListener("click", startChangeColor);
stopBtn.addEventListener("click", stopChangeColor);
