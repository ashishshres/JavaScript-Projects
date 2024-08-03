let elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
    let image = elem.childNodes[3];
    elem.addEventListener("mousemove", function (dets) {
        image.style.left = dets.x + "px";
        image.style.opacity = 1;
    });
    elem.addEventListener("mouseleave", function (dets) {
        image.style.opacity = 0;
    });
});
