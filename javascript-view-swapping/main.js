var $tabContain = document.querySelector('.tab-container');
var $allTabs = document.querySelectorAll('.tab');
var $allViews = document.querySelectorAll('.view');

$tabContain.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $allTabs.length; i++) {
      if ($allTabs[i] === event.target) {
        $allTabs[i].className = 'tab ' + 'active';
      } else {
        $allTabs[i].className = 'tab';
      }
    }
    var attr = event.target.getAttribute('data-view');
    for (var j = 0; j < $allViews.length; j++) {
      if ($allViews[j].getAttribute('data-view') === attr) {
        $allViews[j].className = 'view';
      } else {
        $allViews[j].className = 'view ' + 'hidden';
      }
    }
  }
});
