const clock = document.getElementById("clock");

// let date = new Date();
// console.log(date.toLocaleTimeString()); // 2:16:18 PM

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
