const m11 = require('./module11.js');

console.log('module10 loaded');
m11.inc();

let counter = 0

exports.inc = function inc() {
  counter += 1;
}
