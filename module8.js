const m9 = require('./module9.js');

console.log('module8 loaded');
m9.inc();

let counter = 0

exports.inc = function inc() {
  counter += 1;
}
