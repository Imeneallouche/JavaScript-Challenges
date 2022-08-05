const keyHistorySaver = [];
window.addEventListener("keyup", saveAndPrintKey);

function saveAndPrintKey(eventListenedTo) {
  console.log(eventListenedTo.key);
  keyHistorySaver.push(eventListenedTo.key);
  console.log(keyHistorySaver);
}
