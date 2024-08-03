let musicData = [
    {
        thumbnail:
            "https://cdns-images.dzcdn.net/images/cover/a2159ccceef4e74ffe617bb5085371ff/1900x1900-000000-80-0-0.jpg",
        name: "Phool",
        url: "./samples/The-Woolen-Sweater.mp3",
        artist: "Sujan Chapagain",
        duration: "5:02",
    },
    {
        thumbnail:
            "https://m.media-amazon.com/images/I/51lKASAMB7L._UXNaN_FMjpg_QL85_.jpg",
        url: "./samples/Ve-Kamleya.mp3",
        artist: "Asses Kaur",
        name: "Ve Kamleya",
        duration: "3:04",
    },
    {
        thumbnail:
            "https://i.scdn.co/image/ab67616d0000b273eef98342c3e440f93d265d6a",
        name: "Golden Hour",
        url: "./samples/Golden-Hour.mp3",
        artist: "Jake",
        duration: "3:01",
    },
    {
        thumbnail:
            "https://c.saavncdn.com/042/Sam-Bahadur-Hindi-2023-20231127181521-500x500.jpg",
        name: "Itni Si Baat",
        url: "./samples/Itni-Si-Baat.mp3",
        artist: "Sonu Nigam, Shreya Ghosal",
        duration: "4:08",
    },
    {
        thumbnail:
            "https://images.genius.com/9523d19db6dc1fc7bbb87ddf8e71ce63.1000x1000x1.png",
        name: "Pehle Bhi Main",
        url: "./samples/Pehle-Bhi-Main.mp3",
        artist: "Vishal Mishra",
        duration: "5:03",
    },
];
let musicList = document.querySelector(".music-list");
let currentPlay = document.querySelector(".current-play .left");
let playPauseBtn = document.querySelector(".play-pause-music");
let previousMusic = document.querySelector(".previous-music");
let nextMusic = document.querySelector(".next-music");
let music = document.querySelector(".current-play .music");
let artist = document.querySelector(".current-play .artist");
let audio = new Audio();
let volumeSlider = document.querySelector("#volume-slider");

function clutter() {
    let currentMusic = 0;
    let music = "";
    musicData.forEach(function (data, index) {
        music += `<div class="music music1" id="${index}">
    <div class="left">
    <div class="music-thumbnail">
    <img src="${data.thumbnail}"
    alt="">
    </div>
    <div class="music-name">
    <h3>${data.name}</h3>
    </div>
    </div>
    <div class="right">
    <span>${data.duration}</span>
                </div>
                </div>`;
    });
    currentPlay.style.backgroundImage = `url(${musicData[currentMusic].thumbnail})`;
    musicList.innerHTML = music;
}
clutter();

function playMusic(e) {
    playTrack(Number(e.target.id));
}

function playTrack(index) {
    playPauseBtn.innerHTML = `<i class="ri-pause-line"></i>`;
    document.querySelector(
        "body"
    ).style.backgroundImage = `url(${musicData[index].thumbnail})`;
    currentIndex = index;
    currentMusic = musicData[index].url;
    currentPlay.style.backgroundImage = `url(${musicData[index].thumbnail})`;
    music.textContent = musicData[index].name;
    artist.textContent = musicData[index].artist;
    audio.src = currentMusic;
    audio.play();
}

function playPause() {
    if (!isPause) {
        playPauseBtn.innerHTML = `<i class="ri-arrow-right-s-fill"></i>`;
        isPause = 1;
        audio.pause();
    } else {
        playPauseBtn.innerHTML = `<i class="ri-pause-line"></i>`;
        isPause = 0;
        audio.play();
    }
}

let currentIndex = 0;

function previous() {
    let previousIndex = currentIndex - 1;
    if (previousIndex < 0) {
        previousIndex = musicData.length - 1;
    }
    playTrack(previousIndex);
}

function next() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= musicData.length) {
        nextIndex = 0;
    }
    playTrack(nextIndex);
}

function updateVolume() {
    audio.volume = volumeSlider.value;
}

let isPause = 0;
audio.volume = volumeSlider.value;

musicList.addEventListener("click", playMusic);
playPauseBtn.addEventListener("click", playPause);
previousMusic.addEventListener("click", previous);
nextMusic.addEventListener("click", next);
volumeSlider.addEventListener("input", updateVolume);
