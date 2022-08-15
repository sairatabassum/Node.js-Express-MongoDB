const EvenEmitter = require("events");
const http = require("http");

// const myEmitter = new EvenEmitter();

class Sales extends EvenEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Customer name:saira");
});
myEmitter.on("newSale", (stock) => {
  console.log(`${stock} Items left in stock`);
});
myEmitter.emit("newSale", 9);

//////////////////////////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another Request received");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request");
});
