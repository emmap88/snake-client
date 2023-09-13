const net = require("net");
const { IP, PORT } = require("./constants");

// Create a function to establish a connection with the game server
const connect = function () {

  // Use Node's net library to create a connection object
  const conn = net.createConnection({
    host: IP, // IP address of game server
    port: PORT // Port number of game server
  });

  // Set encoding to UTF-8 for incoming data
  conn.setEncoding("utf8");

  // When connection is established, log a message
  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    // Send name to server after connecting
    conn.write("Name: EMP");
  });

  // Log any incoming data from server
  conn.on("data", (data) => {
    console.log(data);
  });

  // Return the connection object
  return conn;
};

// Export the connect function
module.exports = { connect };