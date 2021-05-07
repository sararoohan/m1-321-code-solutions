var library = [
  {
    isbn: '012345',
    title: 'The Book One',
    author: 'The Author One'
  },
  {
    isbn: '678910',
    title: 'The Book Two',
    author: 'The Author Two'
  },
  {
    isbn: '111213',
    title: 'The Book Three',
    author: 'The Author Three'
  }
];
console.log('Array of Book Objects:', library);
console.log('TypeOf:', typeof library);

console.log('JSON Stringiy:', JSON.stringify(library));
console.log('TypeOf:', typeof JSON.stringify(library));

var student = '{"Number id": "012345", "name": "Sara"}';
console.log('Student String:', student);
console.log('TypeOf:', typeof student);

var obj = JSON.parse(student);

console.log('JS Object:', obj);
console.log('TypeOf:', typeof obj);
