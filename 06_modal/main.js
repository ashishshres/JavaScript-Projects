const openModalBtn = document.querySelector(".open-modal-btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal-btn");

openModalBtn.addEventListener("click", function () {
    modal.classList.add("open");
    overlay.classList.add("open");
});

closeModalBtn.addEventListener("click", function () {
    modal.classList.remove("open");
    overlay.classList.remove("open");
});
