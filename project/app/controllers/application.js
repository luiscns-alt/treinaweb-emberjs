import Controller from '@ember/controller';

export default Controller.extend({
  firstName: 'Luis',
  lastName: 'Carlos',
  fullName: Ember.computed('firstName', 'lastName', function () {
    let firstName = this.get('firstName');
    let lastName = this.get('lastName');
    return `${firstName} ${lastName}`;
  }),

  onFullNameChange: Ember.observer('fullName', function () {
    console.log(`New Full Name: ${this.get('fullName')}`);
  }),
  canShow: false,
  actions: {
    toggleShow: function () {
      this.toggleProperty('canShow');
    },
    myAction: function (param) {
      console.log('text: ' + param)
    }
  }

});
