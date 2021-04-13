/* exported compact */

function compact(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArr.push(array[i]);
      // console.log(newArr);
    }
  }
  return newArr;
}

// if (array[i] != undefined && array[i] != false) {
