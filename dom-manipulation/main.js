var counter = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  counter++;
  var buttonColor;
  if (counter < 4) {
    buttonColor = 'cold';
  } else if (counter < 7) {
    buttonColor = 'cool';
  } else if (counter < 10) {
    buttonColor = 'tepid';
  } else if (counter < 13) {
    buttonColor = 'warm';
  } else if (counter < 16) {
    buttonColor = 'hot';
  } else {
    buttonColor = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + buttonColor;
  $clickCount.textContent = 'Clicks: ' + counter;
});
// console.log($counter);
// console.log('Event:', event);
// console.log('eventTarget:', event.target);
