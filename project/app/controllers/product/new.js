import Controller from '@ember/controller';

export default Controller.extend({
  name: '',
  actions: {
    create: function(){
      var name = this.get('name');
      var newProd = this.get('store').createRecord('product', {
        name
      });

      newProd.save();

      this.set('name', '');
    }
  }
});
