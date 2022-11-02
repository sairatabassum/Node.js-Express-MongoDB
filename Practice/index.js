const http = require("http");
const { handleReqRes } = require("./handleReqRes");

// app object - module scaffolding
const app = {};

// Configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// Handle request response
app.handleReqRes = handleReqRes;

// Start the server
app.createServer();
