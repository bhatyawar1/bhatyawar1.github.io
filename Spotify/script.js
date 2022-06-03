
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Let me Love You", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "That's All Right.", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Everybody Loves My Baby", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Rockin' Robin", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "House of the Rising Sun.", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Happy Birthday", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Take Me Out to the Ball Game", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Blue Sky ", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "World Peace", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Quiet", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

// Handle play/pause clik
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})

// Listen to Events 
audioElement.addEventListener('timeupdate', () => {
    // Update SeekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

const makeAllPlays = () => {
    songItemPlay.forEach(element => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
songItemPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        masterSongName.innerText = songs[songIndex].songName;
        if (audioElement.paused || audioElement.currentTime <= 0) {
            e.target.classList.remove('fa-circle-play')
            e.target.classList.add('fa-circle-pause')
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause')
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            audioElement.play();
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause')
            e.target.classList.add('fa-circle-play')
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play')
            gif.style.opacity = 0;
        }



    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex++;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex--;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')
})


