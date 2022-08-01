//Global Variables
const AllCheckBoxes = document.querySelectorAll(
  ".inbox input[type = checkbox]"
);

const itIsShift = false;
/*




EVENT LISTNERES*/
window.addEventListener("keyup", CheckIfShift);
AllCheckBoxes.forEach((checkbox, index) =>
  checkbox.addEventListener("click", startTheWork)
);
/*





functions*/
function CheckIfShift(EventSelected) {
  if (EventSelected.keyCode == 16) {
    itIsShift = true;
  } else {
    itIsShift = false;
  }
}

/*


*/
function startTheWork(EventSelected) {
  console.log(EventSelected);
}

/*
 */
