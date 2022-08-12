//GLOBAL VARIABLES
const animatedText = document.querySelector(".hero h1");
const hero = document.querySelector(".hero");

/*






*/

function TextAnimation(eventSelected) {
  const middleHorizentally =
    animatedText.offsetLeft + animatedText.offsetWidth / 2;
  const middleVertically =
    animatedText.offsetTop + animatedText.offsetHeight / 2;

  const shadowX = middleHorizentally - eventSelected.offsetX;
  const shadowY = middleVertically - eventSelected.offsetY;

  animatedText.style.textShadow = `
     ${shadowX}px ${shadowY}px 0 rgba(0,255,255,0.7),
     ${-shadowX}px ${shadowY}px 0 rgba(255,0,255,0.7),
     ${shadowX}px ${-shadowY}px 0 rgba(0,255,0,0.7),
     ${-shadowX}px ${-shadowY}px 0 rgba(0,0,255,0.7)
  `;
}

/*






EVENT LISTENERS*/

window.addEventListener("mousemove", TextAnimation);
