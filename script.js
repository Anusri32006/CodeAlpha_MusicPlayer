const songs = [

{
    title:'Song One',
    artist:'Anirudh',
    src:'song1.mp3',
    cover:'cover1.jpg'
},

{
    title:'Song Two',
    artist:'A.R Rahman',
    src:'song2.mp3',
    cover:'cover2.jpg'
}

];

let currentSong = 0;

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

function loadSong(){

    audio.src = songs[currentSong].src;
    title.innerText = songs[currentSong].title;
    artist.innerText = songs[currentSong].artist;
    cover.src = songs[currentSong].cover;

}
loadSong();

function playSong(){
    audio.play();
}

function pauseSong(){
    audio.pause();
}

function nextSong(){

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong();
    playSong();

}

function prevSong(){

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }
    loadSong();
    playSong();

}

audio.addEventListener('timeupdate',()=>{

    progress.value = (audio.currentTime / audio.duration) * 100;

    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime % 60);

    let durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration % 60);

    currentTimeEl.innerText = `${currentMinutes}:${currentSeconds}`;

    durationEl.innerText = `${durationMinutes}:${durationSeconds}`;

});

progress.addEventListener('input',()=>{

    audio.currentTime = (progress.value / 100) * audio.duration;

});

volume.addEventListener('input',()=>{

    audio.volume = volume.value;

});

audio.addEventListener('ended',()=>{

    nextSong();

});