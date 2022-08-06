const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const input = addItems.querySelector("input[name='item']");

const originalList = [...Array.from(itemsList.querySelectorAll("li"))].map(
  (item) => item.innerHTML
);

const items = [];
/*








EVENT LISTENERS*/
addItems.addEventListener("submit", addListItem);

/*


















FUNCTIONS*/
function addListItem(eventListenedTo) {
  eventListenedTo.preventDefault();

  //add the item to the list
  items.push(input.value);

  //empty input field
  input.value = "";

  //empty the list
  itemsList.innerHTML = "";

  items.forEach((item, index) => {
    itemsList.innerHTML += `
    <li>
      <input type="checkbox" id="${index}" name="plate" value="${item}">
      <label for="${index}">${item}</label>
    </li>
    `;
  });
}
