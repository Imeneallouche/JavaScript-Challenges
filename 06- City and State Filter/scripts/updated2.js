//Global variables
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

const UnorderedList = document.querySelector(".search-form ul");

const inputTolistenTo = document.querySelector(".search-form .search");

const originalList = [...Array.from(UnorderedList.querySelectorAll("li"))].map(
  (item) => item.innerHTML
);

/*







*/
fetch(endpoint)
  .then((response) => response.json())
  .then((jsondata) => {
    cities.push(...jsondata);
    /*cities = cities.map((city) => {
      cityName: `${city.city} , ${city.state}`,
      population: `${citypopulation}`;
    });*/
  });

/*







*/

function ShowOffTheList(event) {
  const searchedcities = filterCities(this.value);

  //remove all lis for now
  UnorderedList.innerHTML = "";

  if (this.value) {
    searchedcities.forEach((Thecity) => {
      let HTMLincluded = distinguishColors(Thecity, this.value);
      console.log(HTMLincluded);
      UnorderedList.innerHTML += HTMLincluded;
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
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*







*/
function filterCities(inputvalue) {
  const citiesfiltered = cities.filter(
    (Thecity) =>
      Thecity.city.toLowerCase().includes(inputvalue.toLowerCase()) ||
      Thecity.state.toLowerCase().includes(inputvalue.toLowerCase())
  );

  return citiesfiltered;
}
/*







*/

function distinguishColors(cityName, inputvalue) {
  const differentColor = `${cityName.city}, ${cityName.state}`
    .toLowerCase()
    .split(inputvalue.toLowerCase());

  //to start with
  let HTMLincluded = `<li><span class="name">`;

  //let's include spans
  differentColor.forEach((substring, index) => {
    if (index == differentColor.length - 1) {
      HTMLincluded += `${substring}`;
    } else {
      HTMLincluded += `${substring}<span class='hl'>${inputvalue}</span>`;
    }
  });

  //to end up with
  HTMLincluded += `</span><span class='population'>${numberWithCommas(
    cityName.population
  )}</span></li>`;

  return HTMLincluded;
}

/*







*/

inputTolistenTo.addEventListener("keyup", ShowOffTheList);
