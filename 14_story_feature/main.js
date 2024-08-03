const storyContainer = document.querySelector(".story-container");
let viewStory = document.querySelector(".story-view");
console.log(viewStory);
const stories = [
    {
        profile:
            "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        story: "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        profile:
            "https://images.pexels.com/photos/2874436/pexels-photo-2874436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        story: "https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        profile:
            "https://images.pexels.com/photos/4052179/pexels-photo-4052179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        story: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        profile:
            "https://images.pexels.com/photos/2864806/pexels-photo-2864806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        story: "https://images.pexels.com/photos/127905/pexels-photo-127905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        profile:
            "https://images.pexels.com/photos/2765109/pexels-photo-2765109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        story: "https://images.pexels.com/photos/1117256/pexels-photo-1117256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

let clutter = "";
stories.forEach(function (story, idx) {
    clutter += ` <div class="story">
                <img id="${idx}" src="${story.profile}" alt="">
            </div>`;
});

storyContainer.innerHTML = clutter;
storyContainer.addEventListener("click", function (e) {
    let story = stories[e.target.id].story;
    viewStory.style.display = "block";
    viewStory.style.backgroundImage = `url(${story})`;
    setTimeout(() => {
        viewStory.style.display = "none";
    }, 2500);
});
