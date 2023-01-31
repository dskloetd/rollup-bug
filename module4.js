const m5 = require('./module5.js');

console.log('module4 loaded');
m5.inc();

let counter = 0

exports.inc = function inc() {
  counter += 1;
}
