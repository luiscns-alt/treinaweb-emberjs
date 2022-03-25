import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this.queryParams = [{prodId: 'productId'}];
    this._super(...arguments)
  },
  prodId: ''
});
