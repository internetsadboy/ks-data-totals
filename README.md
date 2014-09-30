### ks-data-totals

Straightforward bot that crawls Kickstarter and returns the following data points

  * Total dollars<br>
  * Successful projects<br>
  * Total backers<br>
  * Repeat backers<br>
  * Total pledges<br>

### Usage

```javascript
'use strict';

var ks_data_totals = require('ks-data-totals');


ks_data_totals(function (err, data) {
  if (err) throw (err);
  console.log(data);
});

```

Output

```javascript
{ total_dollars: 1328557566,
  successful_projects: 70652,
  total_backers: 7062945,
  repeat_backer: 2112031,
  total_pledges: 17795472 }
```

### Installation
```
$ npm install ks-data-totals
```

### Test
```
$ npm test
```
