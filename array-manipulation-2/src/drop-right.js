/* exported dropRight */

function dropRight(array, count) {
  var newArr = array.slice(0, array.length - count);
  // console.log(newArr);
  return newArr;
}
