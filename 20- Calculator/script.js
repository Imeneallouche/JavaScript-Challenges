//GLOBAL VARIABLES
const allButtons = Array.from(document.querySelectorAll("button"));
const input = document.querySelector(".screen input");
const historyWiper = document.querySelector(".wipe-button");
const historyList = document.querySelector(".calculator-history ul");
let equationHistory = [];

/*




THROUGH INPUT*/
function CalculateThroughInput(eventSelected) {
  if (eventSelected.keyCode == 13 || eventSelected.keyCode == 187) {
    const equation = input.value;
    addItToHistory(equation);
    input.value = eval(equation);
  }
}
/*






THROUGH BUTTONS */
function eraseScreen() {
  input.value = "";
}

function Delete() {
  input.value = input.value.slice(0, -1);
}

function writeIt(eventSelected) {
  input.value += eventSelected.value;
}

function MathIt() {
  addItToHistory(input.value);
  input.value = eval(input.value);
}

/*







ADD IT TO HISTORY*/
function addItToHistory(equation) {
  const HTMLToAdd = `
  <li class="historyItem">
    <div class="equation">${equation}</div>
    <div class="result">${eval(equation)}</div>
    <button class="reuse" onclick="useResult(${eval(equation)})">use</button>
  </li>
  `;

  if (equationHistory.length) {
    historyList.innerHTML += HTMLToAdd;
  } else {
    historyList.innerHTML = HTMLToAdd;
  }

  equationHistory.push(equation);
}

function useResult(Result) {
  input.value = Result;
}
function wipeHistory() {
  equationHistory = [];
  historyList.innerHTML = `
  <li>history is empty</li>
  `;
}
/*






EVENT LISTENERS*/
input.addEventListener("keyup", CalculateThroughInput);
historyWiper.addEventListener("click", wipeHistory);
