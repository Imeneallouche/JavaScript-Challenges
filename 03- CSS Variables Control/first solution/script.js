//Global Variables
const imageToBeModified = document.querySelector("img");
const theTextToBeModified = document.querySelector("h2 span");

/*





*/

//update it with default values from the start before listening
changeTheBlur(document.querySelector("#blur"), imageToBeModified);
changeTheColor(
  document.querySelector("#base"),
  imageToBeModified,
  theTextToBeModified
);
changeTheSpacing(document.querySelector("#spacing"), imageToBeModified);

/*





*/

window.addEventListener("input", changeTheVariables);

function changeTheVariables(EventElement) {
  //the input that has been changed
  const inputType = EventElement.target.name;

  //the variables that should be modified
  const variables = [
    EventElement.target,
    imageToBeModified,
    theTextToBeModified,
  ];

  //apply the necessary changes
  switch (inputType) {
    case "blur":
      changeTheBlur(...variables);
      break;
    case "spacing":
      changeTheSpacing(...variables);
      break;
    case "base":
      changeTheColor(...variables);
      break;
  }
}

function changeTheBlur(inputelement, image, remaining) {
  image.style.filter = `blur(${inputelement.value}${inputelement.dataset.sizing})`;
}
function changeTheColor(inputelement, image, text, remaining) {
  image.style.backgroundColor = `${inputelement.value}`;
  text.style.color = `${inputelement.value}`;
}
function changeTheSpacing(inputelement, image, remaining) {
  image.style.padding = `${inputelement.value}${inputelement.dataset.sizing}`;
}
