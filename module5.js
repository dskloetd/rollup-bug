const m6 = require('./module6.js');

console.log('module5 loaded');
m6.inc();

let counter = 0

exports.inc = function inc() {
  counter += 1;
}
