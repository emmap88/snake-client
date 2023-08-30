const { connect } = require("./client");
const { setupInput } = require("./input");
console.log("Connecting ...");
//const conn = connect();
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

setupInput(connect());