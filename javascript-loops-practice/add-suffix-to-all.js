/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var withEnding = [];
  for (var i = 0; i < words.length; i++) {
    withEnding.push(words[i] + suffix);
  }
  return withEnding;
}
