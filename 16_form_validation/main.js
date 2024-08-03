const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");
const errorsContainer = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");

form.addEventListener("submit", function (e) {
    clearErrors();
    const errorMessages = [];

    if (username.value.length < 6) {
        errorMessages.push("Username must be at least 6 characters");
    }
    if (password.value.length < 10) {
        errorMessages.push("Password must be at least 10 characters");
    }
    if (passwordConfirm.value !== password.value) {
        errorMessages.push("Password do not match");
    }
    if (!terms.checked) {
        errorMessages.push("You must accept the terms");
    }

    if (errorMessages.length > 0) {
        e.preventDefault();
        showErrors(errorMessages);
    }
    // console.log(errorMessages);
});

function clearErrors() {
    errorsList.innerHTML = "";
}

function showErrors(errorMessages) {
    errorMessages.forEach(function (errorMessage) {
        const li = document.createElement("li");
        li.innerText = errorMessage;
        errorsList.appendChild(li);
    });
    errorsContainer.classList.add("show");
}
