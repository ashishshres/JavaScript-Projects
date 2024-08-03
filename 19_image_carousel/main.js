const slides = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
// console.log(slides);
let slideIdx = 0;
let interval;

// first version
// function showSlide(idx) {
//     if (idx >= slides.length) {
//         slideIdx = 0;
//     } else if (idx < 0) {
//         slideIdx = slides.length - 1;
//     } else {
//         slideIdx = idx;
//     }
//     slides.forEach(function (slide) {
//         slide.classList.remove("display-slide");
//     });
//     slides[slideIdx].classList.add("display-slide");
// }

// function prevSlide() {
//     slideIdx--;
//     showSlide(slideIdx);
// }
// function nextSlide() {
//     slideIdx++;
//     showSlide(slideIdx);
// }

// document.addEventListener("DOMContentLoaded", function () {
//     slides[slideIdx].classList.add("display-slide");
// });
// prevBtn.addEventListener("click", prevSlide);
// nextBtn.addEventListener("click", nextSlide);

// second version
function startSlider() {
    if (slides.length > 0) {
        slides[slideIdx].classList.add("display-slide");
        interval = setInterval(nextSlide, 3000);
    }
}

function showSlide(idx) {
    if (idx >= slides.length) {
        slideIdx = 0;
    } else if (idx < 0) {
        slideIdx = slides.length - 1;
    } else {
        slideIdx = idx;
    }
    slides.forEach(function (slide) {
        slide.classList.remove("display-slide");
    });
    slides[slideIdx].classList.add("display-slide");
}

function prevSlide() {
    clearInterval(interval);
    slideIdx--;
    showSlide(slideIdx);
    interval = setInterval(nextSlide, 3000);
}

function nextSlide() {
    clearInterval(interval);
    slideIdx++;
    showSlide(slideIdx);
    interval = setInterval(nextSlide, 3000);
}

document.addEventListener("DOMContentLoaded", startSlider);
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
