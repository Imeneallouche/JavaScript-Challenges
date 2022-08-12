//GLOBAL VARIABLES
const bandsList = document.querySelector("#bands");

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

/*









*/

function sortArticles(articles = []) {
  const bandsWithoutPronouns = [...articles];
  const pronouns = ["the", "an", "a"];
  bandsWithoutPronouns.forEach((article, index) => {
    pronouns.forEach((pronoun) => {
      let L = pronoun.length;
      if (article.substring(0, L + 1).toLowerCase() === `${pronoun} `) {
        bandsWithoutPronouns[index] = article.substring(L + 1);
      }
    });
  });

  bandsWithoutPronouns.sort();
  const sortedArticles = SortedArticlesWithPronouns(
    bandsWithoutPronouns,
    articles
  );
  return sortedArticles;
}

/*









*/

function SortedArticlesWithPronouns(
  articlesWithoutPronouns = [],
  articles = []
) {
  articlesWithoutPronouns.forEach((articleWithoutPronoun, index) => {
    articles.forEach((article) => {
      if (article.includes(articleWithoutPronoun)) {
        articlesWithoutPronouns[index] = article;
      }
    });
  });
  return articlesWithoutPronouns;
}

/*














*/
function addBandListHTML(SortedArticles = []) {
  SortedArticles.forEach((article) => {
    bandsList.innerHTML += `
           <li> ${article} </li>
          `;
  });
}
/*




*/
const sortedArticles = sortArticles([...bands]);
addBandListHTML(sortedArticles);
