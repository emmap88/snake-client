// Import the connect function from the client module
const { connect } = require("./client");

// Import the setupInput function from the input module
const { setupInput } = require("./input");

// Log a message that we are connecting
console.log("Connecting ...");

// Call the connect function to connect to the server
// Pass the returned connection to the setupInput function
setupInput(connect());
