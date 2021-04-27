var $char = document.querySelectorAll('.char');
// console.dir($char);
var i = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === $char[i].textContent) {
    $char[i].className = 'char ' + 'correct';
    i++;
    $char[i].className = 'char ' + 'next';
  } else {
    $char[i].className = 'char ' + 'incorrect';
  }
});
