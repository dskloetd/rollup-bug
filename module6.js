const m7 = require('./module7.js');

console.log('module6 loaded');
m7.inc();

let counter = 0

exports.inc = function inc() {
  counter += 1;
}
