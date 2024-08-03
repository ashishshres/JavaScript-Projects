// first version
// const accordions = document.querySelectorAll(".accordion");

// accordions.forEach(function (accordion) {
//     const icon = accordion.querySelector("i");
//     const answer = accordion.querySelector(".answer");
//     accordion.addEventListener("click", function () {
//         if (icon.classList.contains("active")) {
//             icon.classList.remove("active");
//             answer.style.maxHeight = null;
//         } else {
//             icon.classList.add("active");
//             answer.style.maxHeight = answer.scrollHeight + "px";
//         }
//     });
// });

// second version
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(function (accordion) {
    const icon = accordion.querySelector("i");
    const answer = accordion.querySelector(".answer");

    accordion.addEventListener("click", function () {
        accordions.forEach(function (otherAccordion) {
            if (otherAccordion !== accordion) {
                const otherIcon = otherAccordion.querySelector("i");
                const otherAnswer = otherAccordion.querySelector(".answer");
                otherIcon.classList.remove("active");
                otherAnswer.style.maxHeight = null;
            }
        });

        if (icon.classList.contains("active")) {
            icon.classList.remove("active");
            answer.style.maxHeight = null;
        } else {
            icon.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
