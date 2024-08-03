// inputs
let numberOfColors = document.querySelector("#num-colors");
let format = document.querySelector("#format");

// labels
let labelColor = document.querySelector(".num");

// color container
let colors = document.querySelector(".colors");

// buttons
let generateBtn = document.querySelector(".generate");
let clearBtn = document.querySelector(".clear");

// popup
let alertPopup = document.querySelector(".alert");

// generate hex and rgb colors
function generateRandomColor() {
    if (format.value === "hex") {
        let hexRange = "0123456789abcdef";
        let newHexValue = "";
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * hexRange.length);
            newHexValue += hexRange[index];
        }
        newHexValue = `#${newHexValue}`;
        return newHexValue;
    } else {
        let rRange = Math.floor(Math.random() * 255);
        let gRange = Math.floor(Math.random() * 255);
        let bRange = Math.floor(Math.random() * 255);
        let newRGBValue = `rgb(${rRange}, ${gRange}, ${bRange})`;
        return newRGBValue;
    }
}

let clutter = "";

// palette generator
function generatePalette() {
    if (!numberOfColors.value) {
        alertPopup.style.backgroundColor = "salmon";
        alertPopup.style.color = "#222";
        alertPopup.style.opacity = 1;
        alertPopup.innerHTML = `<span>Please mention number of colors</span>`;
        numberOfColors.style.border = "1px solid salmon";
        labelColor.style.color = "salmon";
        setTimeout(() => {
            alertPopup.style.opacity = "0";
        }, 3000);
    } else {
        alertPopup.style.backgroundColor = "#e4e4e4";
        alertPopup.style.color = "#222";
        numberOfColors.style.border = "1px solid #333";
        labelColor.style.color = "#e4e4e4";
        clutter = "";
        for (let i = 0; i < parseInt(numberOfColors.value); i++) {
            let color = generateRandomColor();
            clutter += `<div class="color" style="background-color:${color}"><span>${color}</span></div>`;
        }
        colors.innerHTML = clutter;
    }
}

// reset fields
function clear() {
    numberOfColors.value = "";
    colors.innerHTML = "";
}

// copy to clipboard
colors.addEventListener("click", copyToClipboard);

function copyToClipboard(e) {
    alertPopup.style.backgroundColor = "#e4e4e4";
    alertPopup.style.color = "#222";
    alertPopup.innerHTML = `<span>Copied to clipboard successfully</span>`;
    navigator.clipboard.writeText(e.target.innerText);
    alertPopup.style.opacity = "1";
    setTimeout(() => {
        alertPopup.style.opacity = "0";
    }, 3000);
}

generateBtn.addEventListener("click", generatePalette);

clearBtn.addEventListener("click", clear);

// let toggleMode = document.querySelector(".toggleMode i");
// let body = document.querySelector("body");
// toggleMode.addEventListener("click", () => {
//     toggleMode.classList.toggle("ri-sun-fill");
//     body.classList.toggle("light");
// });
