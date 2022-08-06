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
  //first empty the unorderedList
  itemsList.innerHTML = "";

  console.log(input.value);
}
