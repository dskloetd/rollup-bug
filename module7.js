const m2 = require('./module2.js');

console.log('module7 loaded');

let counter = 0

exports.inc = function inc() {
  counter += 1;
}
