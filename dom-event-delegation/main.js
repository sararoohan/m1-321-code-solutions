document.querySelector('.task-list').addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.nodeName === 'BUTTON') {
    event.target.closest('.task-list-item');
    console.log('closest .task-list-item:', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
});
