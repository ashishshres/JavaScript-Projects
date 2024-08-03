const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const pieces = document.querySelectorAll(".piece");
let beingDragged;

pieces.forEach(function (piece) {
    piece.addEventListener("dragstart", function (e) {
        beingDragged = e.target;
        box1.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        box1.addEventListener("drop", function () {
            box1.append(beingDragged);
            beingDragged = "";
        });

        box2.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        box2.addEventListener("drop", function () {
            box2.append(beingDragged);
            beingDragged = "";
        });
    });
});
