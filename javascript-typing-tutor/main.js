var $char = document.querySelectorAll('.char');
var $modal = document.querySelector('.modal-container');
var $yesbutton = document.querySelector('.button.yes');
var $nobutton = document.querySelector('.button.no');
var $accuracyCount = document.querySelector('.accuracy-count');
var i = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === $char[i].textContent) {
    $char[i].className = 'char ' + 'correct';
    i++;
    $char[i].className = 'char ' + 'next';
  } else {
    $char[i].className = 'char ' + 'incorrect';
  }
  if (i === $char.length - 1) {
    $modal.style.display = 'block';
    $accuracyCount.textContent = 'Nice! You got ' + i + ' out of 30 correct.';
  }
});

$yesbutton.addEventListener('click', function (event) {
  location.reload();
  return false;
});

$nobutton.addEventListener('click', function (event) {
  $modal.style.display = 'none';
});
