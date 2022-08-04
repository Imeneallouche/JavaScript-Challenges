//global variables
const player = document.querySelector(".player");
const videoplayed = player.querySelector(".viewer");
const VideoProgress = player.querySelector(".progress__filled");
const VideoProgressController = player.querySelector(".progress");
const VideoPlayerController = player.querySelector(".player__button.toggle");
const playerSliders = Array.from(player.querySelectorAll(".player__slider"));
/*








let's deal with playing and pausing video*/
//EVENT LISTENERS FOR BUTTON PLAY
videoplayed.addEventListener("click", VideoPlayerToggler);
VideoPlayerController.addEventListener("click", VideoPlayerToggler);
window.addEventListener("keyup", CheckTheKeyPressed);

//FUNCTIONS
function VideoPlayerToggler(EventListenedTo) {
  if (videoplayed.paused) {
    videoplayed.play();
  } else {
    videoplayed.pause();
  }

  //update the button
  updateThePlayButton();
}

function CheckTheKeyPressed(EventListenedTo) {
  //pause or play video
  if (EventListenedTo.keyCode == 32) {
    VideoPlayerToggler(EventListenedTo);
  }

  //move 10s forward
  else {
    if (EventListenedTo.keyCode == 39) {
    }

    //move 10s backward
    else if (EventListenedTo.keyCode == 37) {
    }
  }
}

function updateThePlayButton() {
  if (videoplayed.paused) {
    VideoPlayerController.innerHTML = "►";
  } else {
    VideoPlayerController.innerHTML = "❚❚";
  }
}

/*














let"s deal with the speed and the volume of the video*/
playerSliders.forEach((playerSlider) => {
  playerSlider.addEventListener("input", UpdatePlayeSliders);
});

function UpdatePlayeSliders(EventListenedTo) {
  videoplayed[this.name] = this.value;
}
/*









let's deal with the width of video progress indicator*/
videoplayed.addEventListener("timeupdate", VideoProgressIdicator);
function VideoProgressIdicator() {
  const percentage = (videoplayed.currentTime / videoplayed.duration) * 100;
  VideoProgress.style.flexBasis = `${percentage}%`;
}
