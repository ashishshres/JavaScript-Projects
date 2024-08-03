let generatedPassword = document.querySelector(".generated-password");
let range = document.querySelector("#range");
let rangeValue = document.querySelector("#range-value");
let upperCase = document.querySelector("#uppercase");
let lowerCase = document.querySelector("#lowercase");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");
let generatePasswordBtn = document.querySelector(".generate-password");
let copyBtn = document.querySelector(".copy");

rangeValue.textContent = range.value;
range.addEventListener("input", function() {
    rangeValue.textContent = range.value;
})

let upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
let numberStr = "0123456789";
let symbolStr = "!@#$%^&*()_+-=[]{},.<>/?|`~";
let passwordStr;
let newPassword;

function generatePassword() {
    checkFields();
    newPassword = "";
    for(let i = 0; i < range.value; i++) {
        let random = Math.floor(Math.random() * passwordStr.length);
        newPassword += passwordStr[random];
    }
    generatedPassword.textContent = newPassword;
}

function checkFields() {
    passwordStr = "";

    if(upperCase.checked) {
        passwordStr += upperCaseStr;
    }
    if(lowerCase.checked) {
        passwordStr += lowerCaseStr;
    }
    if(number.checked) {
        passwordStr += numberStr;
    }
    if(symbol.checked) {
        passwordStr += symbolStr;
    }
}

generatePasswordBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(newPassword);
})