/* exported capitalizeWord */

function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  if (newWord === 'javascript') {
    return newWord.replace('javascript', 'JavaScript');
  } else {
    return newWord[0].toUpperCase() + newWord.slice(1).toLowerCase();
  }
}
