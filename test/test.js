'use strict';


var ks_data_totals = require('../index');
var test = require('tape');


test('ks data totals', function (t) {

    t.plan(6);

    ks_data_totals(function (err, data) {

      if (err) throw (err);

      t.equal(typeof data, 'object'); // json payload

      // there should be five arbitrary integers
      Object.keys(data).forEach(function (key) {
        t.equal(typeof data[key], 'number');
      });

    });

});
