let h3 = document.querySelector("h3");
let addBtn = document.querySelector(".addBtn button");
let friends = false;

addBtn.addEventListener("click", function () {
    if (!friends) {
        h3.textContent = "Friends";
        h3.style.color = "#218838";
        friends = true;
        addBtn.textContent = "Remove Friend";
        addBtn.style.backgroundColor = "#c82333";
    } else {
        h3.textContent = "Stranger";
        h3.style.color = "#3a6ecf";
        friends = false;
        addBtn.textContent = "Add Friend";
        addBtn.style.backgroundColor = "#4f86eb";
    }
});
