/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newStr = string.toLowerCase().split('');
  [newStr[firstIndex], newStr[secondIndex]] = [newStr[secondIndex], newStr[firstIndex]];
  return newStr;
}
