import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  pkmFilter: '',
  pokeService: inject(),
  pkmList: Ember.computed('pokeService.list', 'pkmFilter', function () {
    var pkmList = this.get('pokeService').get('list'),
      pkmFilter = this.get('pkmFilter').toLowerCase();

    return pkmList.filter(pkm => pkm.name.includes(pkmFilter));
  })
});
