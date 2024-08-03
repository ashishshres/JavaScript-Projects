let input = document.querySelector("input");
let upperCase = document.querySelector("#uppercase");
let lowerCase = document.querySelector("#lowercase");
let camelCase = document.querySelector("#camelcase");
let pascalCase = document.querySelector("#pascalcase");
let snakeCase = document.querySelector("#snakecase");
let kebabCase = document.querySelector("#kebabcase");
let outputs = document.querySelectorAll(".transformed-output");

input.addEventListener("input", () => {
  if (input.value) {
    transformer();
  } else {
    outputs.forEach((output) => {
      output.textContent = "";
    });
  }
});

function transformer() {
  upperCase.innerText = input.value.toUpperCase();
  lowerCase.innerText = input.value.toLowerCase();
  camelCase.innerText = toCamelCase(input.value);
  pascalCase.innerText = toPascalCase(input.value);
  snakeCase.innerText = toSnakeCase(input.value);
  kebabCase.innerText = toKebabCase(input.value);
}

function toCamelCase(input) {
  let lowercaseStr = input.toLowerCase();
  console.log(lowercaseStr);
  let camelCaseStr = lowercaseStr.split(" ").map((word, i) => {
    if (i === 0) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1, word.length);
    }
  });
  return camelCaseStr.join("");
}

function toPascalCase(input) {
  let lowercaseStr = input.toLowerCase();
  console.log(lowercaseStr);
  let pascalCaseStr = lowercaseStr.split(" ").map((word, i) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
  });
  return pascalCaseStr.join("");
}

function toSnakeCase(input) {
  let lowercaseStr = input.toLowerCase();
  return lowercaseStr.split(" ").join("_");
}

function toKebabCase(input) {
  let lowercaseStr = input.toLowerCase();
  return lowercaseStr.split(" ").join("-");
}
