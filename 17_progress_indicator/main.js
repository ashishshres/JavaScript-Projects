const progress = document.querySelector("#progress");
const progressCount = document.querySelector("#progress-count");
let count = 0;

let isProgress = setInterval(() => {
    count++;
    if (count === 100) {
        clearInterval(isProgress);
    }
    progress.style.width = count + "%";
    progressCount.textContent = count;
}, 50);
