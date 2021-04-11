/* exported filterOutStrings */

function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) !== 'string') {
      noStrings.push(values[i]);
      // console.log(values[i]);
    }
  }
  return noStrings;
}
