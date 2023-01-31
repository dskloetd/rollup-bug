const m10 = require('./module10.js');

console.log('module9 loaded');
m10.inc();

let counter = 0

exports.inc = function inc() {
  counter += 1;
}
