const requestOptions = {
    method: "GET",
    redirect: "follow"
};

let songs = []; 
let currentSongIndex = 0;

fetch("https://music-player-c728c-default-rtdb.firebaseio.com/music.json", requestOptions)
    .then(response => response.json())
    .then(result => {
        songs = Object.values(result); 
       
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]); 
        }
    })
    .catch(error => console.error('Error fetching data:', error));

const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const progressBar = document.getElementById('progress');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const albumCover = document.getElementById('albumCover');

function loadSong(song) {
    trackTitle.textContent = song.title;
    trackArtist.textContent = song.artist;
    albumCover.src = song.artwork;
    audio.src = song.url;
    audio.play(); 
}

function playSong() {
    audio.play();
    playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pauseSong() {
    audio.pause();
    playPauseButton.innerHTML = '<i class="fa-solid fa-play fa-xs">';
}

function togglePlayPause() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function nextSong() {
    if (songs.length > 0) {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
    }
}

function prevSong() {
    if (songs.length > 0) {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
    }
}

function updateProgressBar() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);
audio.addEventListener('timeupdate', updateProgressBar);
