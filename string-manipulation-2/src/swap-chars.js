/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newStr = string.split('');
  [newStr[firstIndex], newStr[secondIndex]] = [newStr[secondIndex], newStr[firstIndex]];
  return newStr.join('');
}
