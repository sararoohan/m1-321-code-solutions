function convertMinutesToSeconds(minutes) {
  return (minutes * 60);
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  return ('Howdy, ' + name + '!');
}

var greetResult = greet('Brett');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  return (width * height);
}

var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  return (person.firstName);
}

var getFirstNameResult = getFirstName({ firstName: 'Sara', lastName: 'Roohan' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var last = (array.length - 1);
  return (array[last]);
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
