const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector(".search-btn");
let imageContainer = document.querySelector(".images");
const loadMoreBtn = document.querySelector(".load-more-btn");
let searchValue;
let page = 1;
const ACCESS_KEY = ""; // use your own access key

async function getImage(searched) {
    try {
        let response = await fetch(
            `https://api.unsplash.com/search/photos?query=${searched}&client_id=${ACCESS_KEY}&page=${page}`
        );
        let data = await response.json();
        makeCard(data);
    } catch (error) {
        console.log(error);
    }
}

function makeCard(data) {
    if (data.results.length > 0) {
        data.results.forEach((result) => {
            console.log(result);
            let {
                user,
                urls,
                alt_description: description,
                likes,
                links,
            } = result;
            let card = document.createElement("div");
            card.classList.add("image-info");
            card.innerHTML = `<div class="author">
                        <img src="${user.profile_image.medium}"
                            alt="">
                        <h3>@${user.username}</h3>
                        <a href="${links.html}" target="_blank"><i class="goto ri-arrow-right-up-line"></i></a>
                        </div>
                        <p><i class="ri-heart-fill"></i> ${likes}</p>
                    <div class="image">
                        <img src="${urls.regular}"
                            alt="">
                    </div>
                    <div class="caption">
                        <p>${description}</p>
                    </div>`;
            imageContainer.appendChild(card);
        });
        loadMoreBtn.classList.add("active");
    } else {
        imageContainer.innerHTML = `<h2 class ="alert">No image found</h2>`;
        loadMoreBtn.classList.remove("active");
    }
}

searchBtn.addEventListener("click", () => {
    searchValue = searchInput.value;
    if (searchValue !== "") {
        page = 1;
        imageContainer.innerHTML = "";
        getImage(searchValue);
    }
});

loadMoreBtn.addEventListener("click", () => {
    page++;
    getImage(searchValue);
});
