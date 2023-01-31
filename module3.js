const m2 = require('./module2.js');
const m8 = require('./module8.js');

console.log('module3 loaded');
m2.inc();
m8.inc();

let counter = 0

exports.inc = function inc() {
  counter += 1;
}
