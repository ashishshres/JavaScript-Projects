let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let height = parseFloat(document.querySelector("#heightInMeter").value);
  let weight = parseFloat(document.querySelector("#weightInKg").value);
  let result = document.querySelector("p");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerText = "Please enter a valid height!";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerText = "Please enter a valid weight!";
  } else {
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
      result.innerText = "Underweight: BMI less than 18.5";
    } else if (bmi < 25) {
      result.innerText = "Normal weight: BMI less than 25";
    } else if (bmi > 25) {
      result.innerText = "Overweight: BMI more than 25";
    }
  }
});
