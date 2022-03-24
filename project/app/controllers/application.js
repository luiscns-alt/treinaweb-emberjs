import Controller from '@ember/controller';

const Animal = Ember.Object.extend({
  species: '',
  sound: '',
  makeNoise() {
    return `The ${this.get('species')} says: ${this.get('sound')}`;
  }
})

const Cat = Animal.extend({
  species: 'cat',
  sound: 'meow',
  makeNoise() {
    var name = this.get('name'),
      superReturn = this._super(),
      noise = '';
    if (name) {
      noise = `${name}, ${superReturn}`;
    } else {
      noise = superReturn;
    }
    console.log(noise);
  }
})

Cat.reopen({
  sound: 'meow meow'
})

let myCat = Cat.create({
  name: 'Gumball'
})

myCat.makeNoise();

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
  },
  actions: {
    toggleShow: function () {
      this.toggleProperty('canShow');
    }
  }
});
