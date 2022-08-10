//GLOBAL VARIABLES
const headKey = document.querySelector(".headKey");
const KeysHistory = document.querySelector(".historyKeys");
/*






*/

const keyHistorySaver = [];
window.addEventListener("keyup", saveAndPrintKey);

function saveAndPrintKey(eventListenedTo) {
  //just to verify
  keyHistorySaver.unshift(eventListenedTo.key);
  console.log(keyHistorySaver);
  /*




  */
  headKey.innerHTML = HeadKeyHtml(eventListenedTo);
  KeysHistory.innerHTML =
    `
   <li class='Key'> ${headKey.innerHTML} </li>
  ` + KeysHistory.innerHTML;
}

/*






*/ function HeadKeyHtml(eventListenedTo) {
  let checkSpace = "";

  if (eventListenedTo.keyCode == 32) {
    checkSpace = "Space";
  } else {
    checkSpace = eventListenedTo.key;
  }
  const headkeyhtml = `
  <h1 class="title">${checkSpace}</h1>
  <hr>
  <p><span class="keypair">KeyCode :</span>"${eventListenedTo.keyCode}"</p>
  <p> <span class="keypair"> key : </span>"${eventListenedTo.key}"</p>
  <p><span class="keypair">shiftKey: </span> ${eventListenedTo.shiftKey}</p>
  `;

  return headkeyhtml;
}
