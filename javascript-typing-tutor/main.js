var $char = document.querySelectorAll('.char');
// console.dir($char);

$char.addEventListener('keydown', function (event) {
  var accuracy;
  for (var i = 0; i < $char.length; i++) {
    if (event.key === $char[i]) {
      accuracy = 'correct';
    } else {
      accuracy = 'incorrect';
    }
    $char.className = 'char' + accuracy;
  }
});
