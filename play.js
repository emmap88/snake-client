const { connect } = require('./client');

console.log('Connecting ...');

connect();

// setup interface to handle user input from stdin
// stdin listen and react to keyboard input
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = { connect };