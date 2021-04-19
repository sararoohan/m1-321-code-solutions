/* exported lastChars */

function lastChars(length, string) {
  var newStr = string.slice(string.length - (length + string.length));
  // console.log(newStr);
  return newStr;
}
