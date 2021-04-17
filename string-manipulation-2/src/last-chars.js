/* exported lastChars */

function lastChars(length, string) {
  var newStr = string.slice(string.length - length);
  return newStr;
}

// function takeRight(array, count) {
//   var newArr = array.slice(array.length - count);
//   return newArr;
// }

// function dropRight(array, count) {
//   var newArr = array.slice(0, array.length - count);
//   // console.log(newArr);
//   return newArr;
// }
