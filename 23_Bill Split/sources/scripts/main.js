// bill inputs
let inputAmount = document.querySelector("#input-amount");
let tipBtns = document.querySelectorAll(".tip-btns");
let customTip = document.querySelector("#custom-tip");
let people = document.querySelector("#people");

// bill outputs
let tipValue = document.querySelector(".tip-value");
let totalValue = document.querySelector(".total-value");
let personBill = document.querySelector(".person-bill");
let billContainer = document.querySelectorAll(".output-container > span");

// generate bill button
let generateBill = document.querySelector(".generate-bill");

// values
let inputAmountVal = parseFloat(inputAmount.value);
let tipAmountVal = 0;
let buttons = document.querySelectorAll(".tip-btns button");

tipBtns.forEach((tipbtn) => {
  tipbtn.addEventListener("click", (e) => {
    // clear button highlights
    buttons.forEach((btn) => {
      btn.style.border = "2px solid transparent";
    });

    tipAmountVal = parseFloat(e.target.value);
    e.target.style.border = "2px solid salmon";
    customTip.value = "";
    console.log(tipAmountVal);
  });
});

customTip.addEventListener("input", () => {
  buttons.forEach((btn) => {
    btn.style.border = "2px solid transparent";
    tipAmountVal = 0;
  });
});

function totalTipAmount() {
  if (!customTip.value) {
    return ((tipAmountVal / 100) * parseFloat(inputAmount.value)).toFixed(2);
  } else {
    return (
      (parseFloat(customTip.value) / 100) *
      parseFloat(inputAmount.value)
    ).toFixed(2);
  }
}

function totalBill() {
  let total;
  if (!customTip.value) {
    total =
      parseFloat(inputAmount.value) +
      (tipAmountVal / 100) * parseFloat(inputAmount.value);
  } else {
    total =
      parseFloat(inputAmount.value) +
      (parseFloat(customTip.value) / 100) * parseFloat(inputAmount.value);
  }
  return total.toFixed(2);
}

function perPersonBill() {
  return (totalBill() / parseInt(people.value)).toFixed(2);
}

// render output
function renderOutput() {
  tipValue.textContent = totalTipAmount();
  totalValue.textContent = totalBill();
  personBill.textContent = perPersonBill();
}

generateBill.addEventListener("click", () => {
  if (inputAmount.value === "" || people.value === "") {
    alert("Empty input fields");
  } else {
    billContainer.forEach((bill) => {
      bill.style.display = "inline";
    });
    renderOutput();
  }
});

// reset the fields
let resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", resetBill);

function resetBill() {
  tipValue.textContent = "";
  totalValue.textContent = "";
  personBill.textContent = "";
  inputAmount.value = "";
  customTip.value = "";
  people.value = "";
  tipAmountVal = "";
  buttons.forEach((btn) => {
    btn.style.border = "2px solid transparent";
  });
  billContainer.forEach((bill) => {
    bill.style.display = "none";
  });
}
