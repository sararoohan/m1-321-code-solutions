/* exported oddOrEven */

function oddOrEven(numbers) {
  var array = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      array.push('even');
    } else if (numbers[i] % 2 === 1) {
      array.push('odd');
    }
    // console.log(array)
  }
  return array;
}
