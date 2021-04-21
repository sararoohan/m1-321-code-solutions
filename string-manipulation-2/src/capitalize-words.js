/* exported capitalizeWords */

function capitalizeWords(string) {
  var newStr = string.toLowerCase().split(' ');
  for (var i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
  }
  return newStr.join(' ');
}
