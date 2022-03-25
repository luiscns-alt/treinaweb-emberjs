import Component from '@ember/component';

export default Component.extend({
  myText: '',
  tagName: 'section',
  classNames: ['my-element', 'my-class'],

  onTextGT15: Ember.observer('myText', function () {
    if (this.get('myText').length > 15) {
      this.sendAction('onMyEvent', this.get('myText'))
    }
  })
});
