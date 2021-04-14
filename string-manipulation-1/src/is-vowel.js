/* exported isVowel */

function isVowel(char) {
  var vowels = 'aeiou';
  return vowels.indexOf(char.toLowerCase()) !== -1;
}
