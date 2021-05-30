const musicContainer = document.querySelector('.container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const songTitle = document.querySelector('#title');
const coverImage = document.querySelector('#music-cover');
const playListContainer = document.querySelector('.playlist-container')
const playList = document.querySelector('#playlist')

// Song array
const songs = ['Vlad Gluschenko-Chestnuts',
    'Tobjan-Memories',
    'Scandinavianz-Waikiki']

let songIndex = 0;

// Load songs info
loadSong(songs[songIndex])

//Update song details
function loadSong(song){
    songTitle.innerText = song;
    audio.src = `songs/${song}.mp3`;
    coverImage.src = `songs/${song}.png`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i').classList.remove('fa-pause');
    playBtn.querySelector('i').classList.add('fa-play');
    audio.pause();
}

function prevSong() {
if (songIndex > 0) {
    songIndex--;
} else {
    console.log('First song')
    // Go to last song
    songIndex = songs.length - 1;
}
loadSong(songs[songIndex]);
playSong();
}

function nextSong() {
if (songIndex < songs.length - 1) {
    songIndex++;
} else{
    console.log('Last song')
    // Go to first song
    songIndex = 0;
}
loadSong(songs[songIndex]);
playSong();
}

function updateProgressBar(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function loadPlaylistSong(e){
    let  songClicked = e.target.innerText;
    loadSong(songClicked);
    playSong();
}

// Event listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('ended', nextSong)

playBtn.addEventListener('click', () =>{
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

progressContainer.addEventListener('click', setProgress);

playListContainer.addEventListener('click', loadPlaylistSong)

// Show playlist
function showPlaylist(songs) {
    let playlist = songs;
    playlist.forEach(addSongToPlayList);
}

function addSongToPlayList(item, index){
    playList.innerHTML += `<p><img style="vertical-align:middle" src="songs/${item}.png">${item}</p>`
}

window.onload = showPlaylist(songs);
