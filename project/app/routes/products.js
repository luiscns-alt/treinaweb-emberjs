import Route from '@ember/routing/route';

export default Route.extend({
  model: () => {
    return this.get('store').findAll('product');
  },
  willTransition: function() {
    window.console.log('Init transition');
  },
  didTransition: function() {

  }
});
