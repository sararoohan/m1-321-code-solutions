/* exported tail */

function tail(array) {
  var afterZero = [];
  for (var i = 1; i < array.length; i++) {
    afterZero.push(array[i]);
  }
  return afterZero;
}
