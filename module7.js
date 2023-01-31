const m2 = require('./module2.js');

console.log('module7 loaded');
m2.inc();

let counter = 0

exports.inc = function inc() {
  counter += 1;
}
