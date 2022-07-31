const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const date = new Date();
const year = date.getFullYear();

const atLeastAnAdult = people.some((person) => year - person.year >= 19);
console.log({ atLeastAnAdult });

/*



*/
// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every((person) => year - person.year >= 19);
console.log({ allAdults });

/*





*/

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const theComment = comments.find((Comment) => Comment.id == 823423);
console.log(theComment);
/*





*/
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const theIndex = comments.findIndex((comment) => comment.id == 823423);
console.log(`the index of the comment which got 823423 id is: ${theIndex}`);
comments.splice(theIndex, 1);
console.log(`comments after deleting it:`);
console.log(comments);
