/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-autonumeric',

  included(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/autoNumeric/autoNumeric.js');
  }
};
