import Controller from '@ember/controller';

export default Controller.extend({
  firstName: 'Luis',
  lastName: 'Carlos',
  canShow: false,
  myList: [
    { name: 'amabile', age: 22 },
    { name: 'billy', age: 16 },
    { name: 'caroline', age: 15 }
  ],
  myNumbers: {
    odd: [1, 3, 5],
    even: [2, 4, 6]
  }
});
