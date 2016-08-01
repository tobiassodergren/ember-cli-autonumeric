import Ember from 'ember';

export default Ember.TextField.extend({

  initializeAutoNumeric: function () {
    this.$().autoNumeric('init', {aSep: ' ', aDec: ',', mDec: '0'});
    this.$().autoNumeric('set', this.get('number'));
  }.on('didInsertElement'),

  tearDownAutoNumeric: function () {
    this.$().autoNumeric('destroy');
  },

  getValue: function () {
    console.log('get-value', this.$().autoNumeric('get'));
    this.set('number', parseFloat(this.$().autoNumeric('get')));
  }.observes('value')

});

