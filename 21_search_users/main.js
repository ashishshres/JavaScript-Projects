let users = document.querySelector(".users");
let usersData = [
    {
        name: "Aryan",
        src: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Ashish",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Ashika",
        src: "https://images.unsplash.com/photo-1521567097888-2c5fc40a8660?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Bishal",
        src: "https://images.unsplash.com/photo-1597969892064-a7b26a98c335?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Bitisha",
        src: "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Diwakar",
        src: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Shikshya",
        src: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Shikha",
        src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

let user = "";
usersData.forEach(function (userData) {
    user += `<div class="user">
    <div class="img">
    <img src="${userData.src}"
    alt="">
    </div>
    <h3>${userData.name}</h3>
    </div>`;
});

users.innerHTML = user;

const input = document.querySelector("input");
input.addEventListener("input", function () {
    let searchedUser = usersData.filter(function (userData) {
        return userData.name
            .toLowerCase()
            .startsWith(input.value.toLowerCase());
    });
    console.log(searchedUser);

    let search = "";
    searchedUser.forEach(function (userData) {
        search += `<div class="user">
        <div class="img">
        <img src="${userData.src}"
        alt="">
        </div>
        <h3>${userData.name}</h3>
        </div>`;
    });

    users.innerHTML = search;
});
