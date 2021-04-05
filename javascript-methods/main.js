// The Math object

var num1 = 7;
var num2 = 23;
var num3 = 10;

var maximumValue = Math.max(num1, num2, num3);
console.log('maxiumValue:', maximumValue);

var heroes = ['Miles Morales', 'Ironman', 'Storm', 'Wolverine'];
var randomNumber = Math.random(heroes);
// console.log('randomNumber:', randomNumber);

randomNumber = (heroes.length * randomNumber);
// console.log('randomNumber:', randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

// Array Methods

var library = [
  {
    title: 'Killers of the Flower Moon',
    author: 'David Grann'
  },
  {
    title: 'The Whole Brain Child',
    author: 'Daniel J. Siegel, MD'
  },
  {
    title: 'Stamped from the Beginning',
    author: 'Ibram X. Kendi'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Updated Library:', library);

// String Methods

var fullName = 'Sara Roohan';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName.shift();
var sayMyName = firstName.toUpperCase(firstName);
console.log('sayMyName:', sayMyName);
