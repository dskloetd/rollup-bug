const m1 = require('./module1.js');

const message = m1.getMessage();

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Rollup CommonJS plugin isCyclic bug repro</h1>
    Message from module1.js: ${message}
  </div>
`
