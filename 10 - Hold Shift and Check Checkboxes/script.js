//Global Variables
const AllCheckBoxes = document.querySelectorAll(
  ".inbox input[type = checkbox]"
);

let lastBoxChecked;

/*




functions*/

function handleTheCheck(EventSelected) {
  //know the start and the end
  let inBetween = false;

  //check if the Shiftnkey is pressed
  //check if the checkbox is checked
  if (EventSelected.shiftKey && this.checked) {
    AllCheckBoxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastBoxChecked) {
        inBetween = !inBetween;
      }

      //all the interval between last checked and event selected (recently checked)
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  //update the last checked box
  lastBoxChecked = this;
}
/*




EVENT LISTNERES*/
AllCheckBoxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleTheCheck)
);
