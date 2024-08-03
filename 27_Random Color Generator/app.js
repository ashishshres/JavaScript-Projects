let button = document.querySelector("button");
let colorCode = document.querySelector(".color-code");
let colorBackground = document.querySelector(".color");

button.addEventListener("click", function () {
  let randomColor = getRandomColor();
  colorCode.innerText = `#${randomColor}`;
  colorBackground.style.backgroundColor = `#${randomColor}`;
});

function getRandomColor() {
  let hexacode = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let randomColorValue = Math.floor(Math.random() * hexacode.length);
    color += hexacode[randomColorValue];
  }
  return color;
}
