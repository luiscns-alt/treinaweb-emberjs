import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  init() {
    this.queryParams = [{prodId: 'productId'}];
    this._super(...arguments)
  },
  prodId: '',
  myService: service(),
  actions: {
    remove: function(product){
      product.destroyRecord();
    }
  }
});
