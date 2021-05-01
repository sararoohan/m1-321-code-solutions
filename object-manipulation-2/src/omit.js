/* exported omit */

function omit(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (keys.includes(key) === false) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}

// SOLUTION VARIANT:
// function omit(source, keys) {
//   var source = { ...source};
//   keys.forEach(key => delete source[key]);
//   return source;
// };
