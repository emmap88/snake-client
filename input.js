// Declare variable to hold server connection
let connection;

// Track current direction snake is moving
let currentDirection = null;

// Set up handler for user input from keyboard
const setupInput = function (conn) {
  // Save connection to write to it on input
  connection = conn;

  // Configure stdin for raw input mode
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");

  // Resume stdin if paused
  stdin.resume();

  // Handle user key presses
  stdin.on("data", handleUserInput);
  
  // Return configured stdin
  return stdin;
};

// Handle user input
const handleUserInput = (key) => {
  // Move up if allowed
  if (key === "w") {
    connection.write("Move: up");
    currentDirection = "up";
  }

  // Move left if allowed
  if (key === "a") {
    connection.write("Move: left");
    currentDirection = "left";
  }

  // Move down if allowed
  if (key === "s") {
    connection.write("Move: down");
    currentDirection = "down";
  }

  // Move right if allowed
  if (key === "d") {
    connection.write("Move: right");
    currentDirection = "right";
  }

  // Exit on Ctrl+C
  if (key === "\u0003") {
    process.exit();
  }

  // Send silly messages on 'k'
  if (key === "k") {
    connection.write("Say: Oh..!");

    // Delayed message sequence
    setTimeout(() => {
      connection.write("Say: Oops!");

      setTimeout(() => {
        connection.write("Say: Ahhh!");

        setTimeout(() => {
          connection.write("Say: The Ennnnd!");
        }, 500);
      }, 1000);
    }, 2000);
  }
};

// Export handler functions
module.exports = { setupInput };
