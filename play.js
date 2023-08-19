const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({ //Node's net library (specifically, the createConnection function) to create an object named conn in the code above. This establishes a connection to the game server.
    host: '10.0.2.15', // IP address here,
    port: 50541,// PORT number here,
  });
  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log("you ded cuz you idled ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn; //conn object that Node returned to you represents the connection that you have with the server.

  // The conn object is full of useful methods and properties that can now be used to interact with the server!
};

console.log("Connecting ...");
connect();