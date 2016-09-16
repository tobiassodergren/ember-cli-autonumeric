import Ember from 'ember';

export default Ember.TextField.extend({

  aSep: ',',
  dGroup: '3',
  aDec: '.',
  altDec: null,
  aSign: '',
  pSign: 'p',
  vMin: '0.00',
  vMax: '999999999.99',
  mDec: null,
  mRound: 'S',
  aPad: true,
  nBracket: null,
  wEmpty: 'empty',
  IZero: 'allow',
  aForm: true,

  options: function() {
    return {
      aSep: this.get('aSep'),
      dGroup: this.get('dGroup'),
      aDec : this.get('aDec'),
      altDec : this.get('altDec'),
      aSign : this.get('aSign'),
      pSign : this.get('pSign'),
      vMin : this.get('vMin'),
      vMax : this.get('vMax'),
      mDec : this.get('mDec'),
      mRound : this.get('mRound'),
      aPad : this.get('aPad'),
      nBracket : this.get('nBracket'),
      wEmpty : this.get('wEmpty'),
      IZero : this.get('IZero'),
      aForm : this.get('aForm')
    };
  },

  initializeAutoNumeric: function () {
    this.$().autoNumeric('init', {aSep: ' ', aDec: ',', mDec: '0'});
    this.$().autoNumeric('set', this.get('number'));
  }.on('didInsertElement'),

  tearDownAutoNumeric: function () {
    this.$().autoNumeric('destroy');
  }.on('willDestroyElement'),

  getValue: function () {
    this.set('number', parseFloat(this.$().autoNumeric('get')));
  }.observes('value')

});

