const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const input = addItems.querySelector("input[name='item']");

const originalList = [...Array.from(itemsList.querySelectorAll("li"))].map(
  (item) => item.innerHTML
);

let items = JSON.parse(localStorage.getItem("items")) || [];

/*










FUNCTIONS*/
function addListItem(eventListenedTo) {
  eventListenedTo.preventDefault();

  //add the item to the list
  const text = input.value;
  const item = {
    text,
    done: false,
  };
  items.push(item);

  //empty the list
  itemsList.innerHTML = "";

  //new html for the list
  addInnerHTML(items, itemsList);

  localStorage.setItem("items", JSON.stringify(items));

  //empty input fields
  this.reset();
}

/*









*/

function addInnerHTML(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, index) => {
      return `
    <li>
    <div>
      <input type="checkbox" id="${index}" name="plate" value="${plate.text}" ${
        plate.done ? "checked" : ""
      } />
      <label for="${index}">${plate.text}</label>
    </div>

    <button onclick='removePlate(${index})' class="delete_button">x</button>
  </li>
`;
    })
    .join("");
}

/*









*/

function removePlate(indexOfPlate = items.length) {
  items.splice(indexOfPlate, 1);
  console.log(items);

  //empty the list
  itemsList.innerHTML = "";

  if (items.length == 0) {
    originalList.forEach((originalitem) => {
      const OriginalHTML = `<li>${originalitem}</li>`;
      itemsList.innerHTML += OriginalHTML;
    });
    localStorage.setItem("items", JSON.stringify(items));
  } else {
    addInnerHTML(items, itemsList);
  }
}

/*









*/

function toggleDone(eventListenedTo) {
  if (!eventListenedTo.target.matches("input")) return; // skip this unless it's an input
  const el = eventListenedTo.target;
  const index = el.id;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  addInnerHTML(items, itemsList);
}

/*








EVENT LISTENERS*/
addItems.addEventListener("submit", addListItem);
itemsList.addEventListener("click", toggleDone);
addInnerHTML(items, itemsList);
localStorage.setItem("items", JSON.stringify(items));
