const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({ //Node's net library (specifically, the createConnection function) to create an object named conn in the code above. This establishes a connection to the game server.
    host: 'localhost', // IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server ");
    conn.write("Name: EMP");
  
    // conn.write("Move: down");
    //   setTimeout(() => {
    //     conn.write("Move: up");
    //   }, 500);

    //   setTimeout(() => {
    //     conn.write(("Move: right"));
    //   }, 1000);
    //   setTimeout(() => {
    //     conn.write("Move: left");
    //   }, 1500);
 
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  // conn.on("close", () => {
  //   console.log("Connection closed");
  // });

  // conn.on("error", (err) => {
  //   console.log("Error: ", err);
  // });

  // conn.on("end", () => {
  //   console.log("Connection ended");
  // });

  // conn.on("drain", () => {
  //   console.log("Connection drained");
  // });

  
  // let direction = "up";

  // setInterval(() => {
  //   conn.write(`Move: ${direction}`);
  
  //   // cycle through directions
  //   if (direction === "up") direction = "left";
  //   else if (direction === "left") direction = "down";
  //   else if (direction === "down") direction = "right";
  //   else if (direction === "right") direction = "up";

  // }, 500);


  return conn; //conn object that Node returned to you represents the connection that you have with the server.

  // The conn object is full of useful methods and properties that can now be used to interact with the server!
};

module.exports = { connect };
// console.log("Connecting ...");
//connect();