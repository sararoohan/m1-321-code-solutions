function handleClick(event) {
  console.log('button clicked');
  console.log('Event:', event);
  console.log('eventTarget:', event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('Event:', event);
  console.log('eventTarget:', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('Event:', event);
  console.log('eventTarget:', event.target);
}

var $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick, false);
