const form = document.querySelector("form");
const todoList = document.querySelector(".todo-list");
const input = document.querySelector("#todo-input");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const todoItem = document.createElement("div");
    todoItem.innerText = input.value;
    todoItem.classList.add("todo-item");
    todoList.appendChild(todoItem);
    input.value = "";

    todoItem.addEventListener("click", function () {
        // todoList.removeChild(todoItem);
        todoItem.remove();
    });
});
