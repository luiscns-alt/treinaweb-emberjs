import Controller from '@ember/controller';

export default Controller.extend({
  pkmFilter: '',
  list: [
    {
      "name": 'pikachu',
      "number": '025'
    },
    {
      "name": 'chikorita',
      "number": '152'
    },
    {
      "name": 'blaziken',
      "number": '257'
    }
  ],
  pkmList: Ember.computed('list', 'pkmFilter', function () {
    var pkmList = this.get('list'),
      pkmFilter = this.get('pkmFilter').toLowerCase();

    return pkmList.filter(pkm => pkm.name.includes(pkmFilter));
  })
});
