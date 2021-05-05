/* exported zip */

function zip(first, second) {
  var newArr = [];
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      newArr.push([first[i], second[i]]);
    }
    return newArr;
  }
  if (first.length >= second.length) {
    for (var j = 0; j < second.length; j++) {
      newArr.push([first[j], second[j]]);
    }
    return newArr;
  }
}
