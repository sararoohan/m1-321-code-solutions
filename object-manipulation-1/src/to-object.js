/* exported toObject */

function toObject(keyValuePair) {
  var newObj = {};
  for (var i = 0; i < keyValuePair.length; i += 2) {
    newObj[keyValuePair[i]] = (keyValuePair[i + 1]);
    // console.log(obj);
  }
  return newObj;
}
