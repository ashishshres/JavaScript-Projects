const form = document.querySelector("form");
const questions = document.querySelectorAll(".question-item");
const answers = Array.from(document.querySelectorAll(".answer"));
const alert = document.querySelector("#alert");
// console.log(answers);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    questions.forEach(function (question) {
        question.classList.add("incorrect");
        question.classList.remove("correct");
    });

    const checkedAnswers = answers.filter(function (answer) {
        return answer.checked;
    });
    // console.log(checkedAnswers);

    checkedAnswers.forEach(function (answer) {
        // if (answer.value === "true") {
        //     const isCorrect = answer.value;
        // }
        // const isCorrect = answer.value; // returns string
        const isCorrect = answer.value === "true"; // returns boolean
        // console.log(typeof isCorrect);

        const question = answer.closest(".question-item"); // returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.
        // console.log(question);

        if (isCorrect) {
            question.classList.add("correct");
            question.classList.remove("incorrect");
        } else {
            question.classList.add("incorrect");
            question.classList.remove("correct");
        }

        // check if all questions are answered or not
        const allAnswered = checkedAnswers.length === questions.length;

        // check if all answers are correct or not
        const allTrue = checkedAnswers.every(function (answer) {
            return answer.value === "true";
        });

        if (allTrue && allAnswered) {
            alert.classList.add("active");
            setTimeout(() => {
                alert.classList.remove("active");
            }, 1500);
        }
    });
});
