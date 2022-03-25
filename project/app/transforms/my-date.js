import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return new Date(serialized);
  },

  serialize(deserialized) {
    return (new Date(deserialized)).getTime();
  }
});
