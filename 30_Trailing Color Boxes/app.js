let container = document.querySelector(".container");

function createBoxes() {
    let clutter = "";
    for (let i = 0; i < 363; i++) {
        clutter += `<div class = "box b${i}"></div>`;
    }
    container.innerHTML = clutter;
}
createBoxes();

function randomColor() {
    let hexa = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
        let randomIdx = Math.floor(Math.random() * hexa.length);
        color += hexa[randomIdx];
    }
    return color;
}

let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
        let color = randomColor();
        e.target.style.backgroundColor = `#${color}`;
    })
    box.addEventListener("mouseleave", (e) => {
        setTimeout(() => {
            e.target.style.backgroundColor = "#333";
        }, 500);
    })
});

