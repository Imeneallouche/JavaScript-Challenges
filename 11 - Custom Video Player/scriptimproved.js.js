//global variables
const player = document.querySelector(".player");
const videoplayed = player.querySelector(".viewer");
const VideoProgress = player.querySelector(".progress__filled");
const VideoProgressController = player.querySelector(".progress");
const VideoPlayerController = player.querySelector(".player__button.toggle");
const playerSliders = Array.from(player.querySelectorAll(".player__slider"));
const videoSkipControllers = player.querySelectorAll("[data-skip]");
console.log(videoSkipControllers);
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
      updateSkipVideo(videoSkipControllers[1]);
    }

    //move 10s backward
    else if (EventListenedTo.keyCode == 37) {
      updateSkipVideo(videoSkipControllers[0]);
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

let mousedown = false;
VideoProgressController.addEventListener("click", VideoPlayerAdjust);

VideoProgressController.addEventListener(
  "mousemove",
  (EventListenedTo) => mousedown && VideoPlayerAdjust(EventListenedTo)
);

VideoProgressController.addEventListener("mousedown", () => (mousedown = true));

VideoProgressController.addEventListener("mouseup", () => (mousedown = false));

function VideoPlayerAdjust(EventListenedTo) {
  const timeadjustement =
    (EventListenedTo.offsetX / VideoProgressController.offsetWidth) *
    videoplayed.duration;
  console.log(timeadjustement);
  videoplayed.currentTime = timeadjustement;
}

/*














let"s deal with the skip forward and backward of the video*/

videoSkipControllers.forEach((videoSkipController) =>
  videoSkipController.addEventListener("click", (e) =>
    updateSkipVideo(e.target)
  )
);

function updateSkipVideo(EventListenedTo) {
  videoplayed.currentTime += parseFloat(EventListenedTo.dataset.skip);
}
