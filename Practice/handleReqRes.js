const { StringDecoder } = require("string_decoder");
const url = require("url");
const routes = require("./routes");
const { notFoundHandler } = require("./notFoundHandler");

const handler = {};

handler.handleReqRes = (req, res) => {
  // request handling
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headerObject = req.headers;

  const requestProperties = {
    parsedUrl,
    path,
    method,
    queryStringObject,
    headerObject,
  };

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[path] ? routes[path] : notFoundHandler;
  chosenHandler(requestProperties, () => {});

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);

    //   response handle
    res.end("Hello world.");
  });

  // console.log(method);
  // console.log(queryStringObject);
  // console.log(path);
  // console.log(headerObject);
};

module.exports = handler;
