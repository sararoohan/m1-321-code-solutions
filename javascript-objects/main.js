var student = {
  firstName: 'Sara',
  lastName: 'Roohan',
  age: 34
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Marketplace Manager';
console.log('Lives in Irvine:', student.livesInIrvine);
console.log('Previous Occupation:', student.previousOccupation);

var vehicle = {
  make: 'Chevy',
  model: 'Nova',
  year: 1968
};

vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;
console.log('Color:', vehicle.color);
console.log('Is Convertible:', vehicle.isConvertible);
console.log('Vehicle:', vehicle);

var pet = {
  name: 'Stella',
  type: 'Standard Poodle'
};

delete pet.name;
delete pet.type;
console.log('Pet:', pet);
