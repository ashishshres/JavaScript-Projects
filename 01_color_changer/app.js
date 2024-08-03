let body = document.querySelector("body");
let divs = document.querySelectorAll("div");

for (div of divs) {
  div.addEventListener("click", function (e) {
    if (e.target.className == "grey") {
      body.style.backgroundColor = "grey";
    } else if (e.target.className == "pink") {
      body.style.backgroundColor = "pink";
    } else if (e.target.className == "yellow") {
      body.style.backgroundColor = "yellow";
    } else {
      body.style.backgroundColor = "skyblue";
    }
  });
}
