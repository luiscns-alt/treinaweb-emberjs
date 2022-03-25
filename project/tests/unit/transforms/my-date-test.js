import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('transform:my-date', 'Unit | Transform | my date', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let transform = this.owner.lookup('transform:my-date');
    assert.ok(transform);
  });
});
