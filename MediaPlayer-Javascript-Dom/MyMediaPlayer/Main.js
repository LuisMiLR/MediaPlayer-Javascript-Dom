
let video = document.querySelector('.video');
let juice = document.querySelector('.orange-juice');
let btn = document.getElementById('play-pause');
let muteBtn = document.getElementById('mute');
let volumeslider = document.getElementById('volumeSlider');
let orangeBar = document.querySelector('.orange-bar');
var rwdBtn = document.querySelector('.rwd');
var fwdBtn = document.querySelector('.fwd');
var stopBtn = document.getElementById('stop');

function togglePlayPause() {

    if(video.paused){
        btn.className="pause";
        video.play();
    }
    else {
        btn.className = "play";
        video.pause();
    }

}

btn.onclick = function(){
    togglePlayPause();
}

// barre orange

video.addEventListener('timeupdate', function(){

    let juicePos = video.currentTime / video.duration;

    juice.style.width = juicePos * 100 + '%';

    if(video.ended) {
        btn.className ="play";
    }


})

// mute la video


muteBtn.addEventListener('click', function(){

    if(video.muted){
        video.muted = false;
        muteBtn.innerHTML = "Mute";
    } else {
        video.muted = true;
        muteBtn.innerHTML = "Unmute";
    }

})

// Volume


volumeslider.addEventListener('change', function(){


    video.volume = volumeslider.value / 100;

})


// la barre orange clikable

let rect = orangeBar.getBoundingClientRect();
console.log(rect);

let largeur = rect.width;

orangeBar.addEventListener('click', function(e){


    // la valeur de notre click sur x par rapport a notre element

    let x = e.clientX - rect.left;
    
    let widthPercent = ((x*100)/largeur);
    
    let currentTimeTrue = (widthPercent * 63 ) / 100;
    
    // position en secondes
    video.currentTime = currentTimeTrue;
    // barre orange qui va la ou on clique
    juice.style.width = widthPercent + '%';

})

// bouton arret
stopBtn.onclick = function() {
    video.pause();
    video.currentTime = 0;
    playPauseBtn.textContent = 'Play';
  };

// Avance:recule

rwdBtn.onclick = function() {
    video.currentTime -= 3;
  };
  
fwdBtn.onclick = function() {
    video.currentTime += 3;
    if(video.currentTime >= video.duration || video.paused) {
      video.pause();
      video.currentTime = 0;
      playPauseBtn.textContent = 'Play';
    }
  };

video.removeAttribute('controls');