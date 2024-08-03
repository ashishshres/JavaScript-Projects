let counter = document.querySelector("h2");
let countPlus = document.querySelector(".increment");
let countMinus = document.querySelector(".decrement");
let reset = document.querySelector(".reset");

countPlus.addEventListener("click", () => {
  let countValue = parseInt(document.querySelector("#count").value);
  let presentValue = parseInt(counter.innerText);
  presentValue += countValue;
  counter.innerText = presentValue;
});

countMinus.addEventListener("click", () => {
  let countValue = parseInt(document.querySelector("#count").value);
  let presentValue = parseInt(counter.innerText);
  presentValue -= countValue;
  counter.innerText = presentValue;
});

reset.addEventListener("click", () => {
  let countValue = document.querySelector("#count");
  counter.innerText = "0";
  countValue.value = "0";
});
