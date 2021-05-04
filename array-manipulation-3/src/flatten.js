/* exported flatten */

function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    var key = array[i];
    if (!Array.isArray(key)) {
      newArr.push(key);
    } else {
      for (var j = 0; j < key.length; j++) {
        newArr.push(key[j]);
      }
    }
  }
  return newArr;
}
