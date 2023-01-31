const m2 = require('./module2.js');
const m4 = require('./module4.js');

console.log('module1 loaded');
m4.inc();

let counter = 0

exports.inc = function inc() {
  counter += 1;
}

exports.getMessage = function() {
  return 'Hello from module1!';
}
