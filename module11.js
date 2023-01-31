const m4 = require('./module4.js');

console.log('module11 loaded');
m4.inc();

let counter = 0

exports.inc = function inc() {
  counter += 1;
}
