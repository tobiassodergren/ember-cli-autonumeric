import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-autonumeric', 'Integration | Component | input autonumeric', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{input-autonumeric}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#input-autonumeric}}
      template block text
    {{/input-autonumeric}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
