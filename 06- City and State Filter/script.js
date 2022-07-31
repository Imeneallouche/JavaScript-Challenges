//Global variables
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

const UnorderedList = document.querySelector(".search-form ul");

const inputTolistenTo = document.querySelector(".search-form .search");

const originalList = ["Filter for a city", "or a state"];

/*







*/
fetch(endpoint)
  .then((response) => response.json())
  .then((jsondata) => {
    cities.push(...jsondata);
    cities = cities.map((city) => `${city.city} , ${city.state}`);
  });

/*







*/

function ShowOffTheList(event) {
  const searchedcities = cities.filter((city) => city.includes(this.value));

  //remove all lis for now
  UnorderedList.innerHTML = "";

  if (this.value) {
    searchedcities.forEach((city) => {
      const newListItem = document.createElement("li");
      newListItem.appendChild(document.createTextNode(city));
      UnorderedList.appendChild(newListItem);
    });
  } else {
    originalList.forEach((city) => {
      const newListItem = document.createElement("li");
      newListItem.appendChild(document.createTextNode(city));
      UnorderedList.appendChild(newListItem);
    });
  }
}

/*







*/

inputTolistenTo.addEventListener("keyup", ShowOffTheList);
