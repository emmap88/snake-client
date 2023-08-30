// const { connect } = require('./client');

// console.log('Connecting ...');

// connect();
let connection;
// setup interface to handle user input from stdin
// stdin listen and react to keyboard input
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};
const handleUserInput = (key) => {
  console.log(key);
  console.log(connection);

  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === '\u0003') {
    process.exit(); // control c
  }

  
  connection.write("Move: down");
  setTimeout(() => {
    connection.write("Move: up");
  }, 500);

  setTimeout(() => {
    connection.write(("Move: right"));
  }, 1000);
  setTimeout(() => {
    connection.write("Move: left");
  }, 1500);
};
module.exports = { setupInput };