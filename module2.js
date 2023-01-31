const m3 = require('./module3.js');

console.log('module2 loaded');
m3.inc();

let counter = 0

exports.inc = function inc() {
  counter += 1;
}
