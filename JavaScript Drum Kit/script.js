function PlaySound(EvenetClicked) {
  let audioSelected = document.querySelector(
    `audio[data-key="${EvenetClicked.keyCode}"]`
  );

  if (!audioSelected) {
    return; //stop the function from runnning
  }

  const KeyDecoration = document.querySelector(
    `.key[data-key="${EvenetClicked.keyCode}"]`
  );

  KeyDecoration.classList.add("playing");

  audioSelected.play();

  audioSelected.currentTime = 0; //this is for replaying the key even if the previous one didn't finish being played(avoid delay)
}

//remove the class .playing at the end of the transition
let allKeys = Array.from(document.querySelectorAll(".key")); //we could have done document.querySelectorAll(".key") directaly

allKeys.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);

//we want to remove the class until transform is made
function removeTransition(event) {
  if (event.propertyName != "transform") {
    return; //we want to let the transition until we come to transform
  }

  event.target.classList.remove("playing"); //we could have done this.classList.remove('playing')
}

window.addEventListener("keydown", PlaySound);
