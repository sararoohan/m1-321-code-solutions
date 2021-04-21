var clicks = 0;

var $lightBulb = document.querySelector('.light-bulb');
var $lightDark = document.querySelector('.on');

$lightBulb.addEventListener('click', function (event) {
  clicks++;
  var onOff;
  if (clicks % 2 === 0) {
    onOff = 'on';
  } else {
    onOff = 'off';
  }
  $lightBulb.className = 'light-bulb ' + onOff;
  $lightDark.className = onOff;
});
