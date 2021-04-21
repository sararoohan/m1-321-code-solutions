/* exported ransomCase */

function ransomCase(string) {
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newStr += string[i].toLowerCase();
    } else {
      newStr += string[i].toUpperCase();
    }
  }
  return newStr;
}

// function ransomCase(string) {
//   var newStr = string.toUpperCase().split('');
//   for (var i = 0; i < newStr.length; i += 2) {
//     newStr[i] = newStr[i].toLowerCase();
//   }
//   return newStr.join('');
// };
