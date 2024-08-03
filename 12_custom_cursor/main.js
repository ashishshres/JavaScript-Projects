const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");
const h1 = document.querySelector(".main h1");

body.addEventListener("mousemove", function (dets) {
    // console.log(e.clientX, e.clientY);
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
});

h1.addEventListener("mouseenter", function () {
    cursor.style.scale = "3";
});
h1.addEventListener("mouseleave", function () {
    cursor.style.scale = "1";
});
