let connection;
let currentDirection = null; 
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

  if (key === 'w' && currentDirection !== 'down') {
    connection.write('Move: up');
    currentDirection = 'up';
  }

  if (key === 'a' && currentDirection !== 'right') {
    connection.write('Move: left');
    currentDirection = 'left';
  }

  if (key === 's' && currentDirection !== 'up') {
    connection.write('Move: down');
    currentDirection = 'down'; 
  }

  if (key === 'd' && currentDirection !== 'left') {
    connection.write('Move: right');
    currentDirection = 'right';
  }
  if (key === '\u0003') {
    process.exit(); // Ctrl+C to quit
  }

  if (key === 'k') {
    connection.write('Say: Oh..!');
    setTimeout(() => {
      connection.write('Say: Oops!');
    }, 500);
    setTimeout(() => {
      connection.write('Say: Ahhh!');
    }, 1000);
    setTimeout(() => {
      connection.write('Say: The Ennnnd!');
    }, 2000);
    setTimeout(() => {
      connection.write('Say: What a Wooorld!');
    }, 3000);
  
  }
//   connection.write("Move: down");
//   setTimeout(() => {
//     connection.write("Move: up");
//   }, 500);

//   setTimeout(() => {
//     connection.write(("Move: right"));
//   }, 1000);
//   setTimeout(() => {
//     connection.write("Move: left");
//   }, 1500);
 };
module.exports = { setupInput };