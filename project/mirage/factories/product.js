import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Product ${i}`;
  },
  price: 5.20,
  active: true,
  created: new Date()
});
