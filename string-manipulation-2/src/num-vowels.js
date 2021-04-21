/* exported numVowels */

function numVowels(string) {
  var newStr = string.toLowerCase().split('');
  var count = 0;
  var vowels = 'aeiou';
  for (var i = 0; i < newStr.length; i++) {
    if (vowels.indexOf(newStr[i].toLowerCase()) !== -1) {
      count += 1;
    }
  }
  return count;
}
