/* exported equal */

function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
    if (first.length !== second.length) {
      return false;
    }
  }
  return true;
}
