var $modal = document.querySelector('.modal');
var $openButton = document.querySelector('.open');
var $closeButton = document.querySelector('.close');

$openButton.addEventListener('click', function (event) {
  $modal.style.display = 'block';
});

$closeButton.addEventListener('click', function (event) {
  $modal.style.display = 'none';
});
