var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var messageData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('message Data:', messageData);
  document.querySelector('#contact-form').reset();
});
