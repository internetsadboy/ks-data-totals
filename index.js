'use strict';

var cheerio = require('cheerio');
var request = require('request');

var URL, $;

URL = 'https://www.kickstarter.com/help/stats';

module.exports = function ksDataTotals (callback)
{
    request(URL, function onRequest (err, res, body) {

      if (err) return callback(err, null);

      $ = cheerio.load(body);

      var i, set = [], data = {};

      for (i = 0; i < 5; i++) set.push(Number($('.mb1').eq(i).text().replace(/[$,]/g, '')));

      data = {
        total_dollars: set[0],
        successful_projects: set[1],
        total_backers: set[2],
        repeat_backers: set[3],
        total_pledges: set[4]
      };

      callback(null, data);

    });
};
