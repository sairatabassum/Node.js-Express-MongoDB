const http = require("http");
const url = require("url");

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
app.handleReqRes = (req, res) => {
  // request handling
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;

  console.log(method);
  console.log(queryStringObject);
  console.log(path);

  //   response handle
  res.end("Hello world.");
};

// Start the server
app.createServer();
