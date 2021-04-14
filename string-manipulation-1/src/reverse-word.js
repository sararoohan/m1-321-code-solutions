/* exported reverseWord */

function reverseWord(word) {
  var backward = '';
  for (var i = word.length - 1; i >= 0; i--) {
    backward += word[i];
    // console.log(backward);
  }
  return backward;
}
