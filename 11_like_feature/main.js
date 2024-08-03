const container = document.querySelector(".container");
const love = document.querySelector("i");

container.addEventListener("dblclick", function () {
    love.style.transform = "translate(-50%, -50%) scale(2)";
    setTimeout(() => {
        love.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000);
});
