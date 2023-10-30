const playEl = document.getElementById("play");
let progressEl = document.getElementById("progress");
const songEl = document.getElementById("song");
const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const backward = document.getElementById("backward");    
const forward = document.getElementById("forward");

let currentSong = 1;

songEl.onloadedmetadata = function () {
  progressEl.max = songEl.duration;
  progressEl.value = songEl.currentTime;
};

playEl.addEventListener("click", function () {
  if(songEl.paused) {
    songEl.play();
    playEl.classList.remove("fa-play");
    playEl.classList.add("fa-pause");
  } else {
    songEl.pause();
    playEl.classList.remove("fa-pause");
    playEl.classList.add("fa-play");
  }
});

if (songEl.play()) {
  setInterval(() => {
    progressEl.value = songEl.currentTime;
  }, 500);
}

progressEl.onchange = function () {
  songEl.play();
  songEl.currentTime = progressEl.value;
  playEl.classList.add("fa-pause");
  playEl.classList.remove("fa-play");
};

forward.addEventListener("click", function() {
currentSong = currentSong === 2? 1 : 2;
changeSong(currentSong);
});

backward.addEventListener("click", function() {
currentSong = currentSong === 1? 2:1;
changeSong(currentSong);
});

function changeSong(songNumber) {
    if(songNumber === 1){
        songEl.src = song1.src;
        document.querySelector("img").src = "music player_image.jpg"
        songTitle.textContent = "Christmas Lights";
        artist.textContent = "Zach Seabaugh";
    } else if( songNumber === 2){
        songEl.src = song2.src;
        songTitle.textContent = "Night Changes";
        artist.textContent = "One Direction";
        document.querySelector("img").src = "music player_image2.jpg"
    }

    songEl.load();
    songEl.play();
    playEl.classList.remove("fa-play");
    playEl.classList.add("fa-pause");

}
