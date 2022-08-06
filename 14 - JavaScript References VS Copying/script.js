// start with strings, numbers and booleans

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

// You might think we can just do something like this:

// const playersCopy = players

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread
const playersCopy = [];
playersCopy.push(...players);
console.log(playersCopy);
console.log(players);

playersCopy.unshift("Imène");
console.log(playersCopy);
console.log(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Imène ALLOUCHE",
  age: 80,
};

// and think we make a copy:

// how do we take a copy instead?

// We will hopefully soon see the object ...spread
let personCopy = { ...person };
console.log(personCopy);
console.log(person);

personCopy = Object.assign({}, person, {
  social: { Github: "Imeneallouche", Instagram: "imenealch" },
});

personCopy = Object.assign({}, personCopy, { age: 18 });
console.log(person);
console.log(personCopy);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
