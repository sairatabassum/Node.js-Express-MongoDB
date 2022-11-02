const { StringDecoder } = require("string_decoder");
const url = require("url");

const handler = {};

handler.handleReqRes = (req, res) => {
  // request handling
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headerObject = req.headers;

  const decoder = new StringDecoder("utf-8");
  let realData = "";

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
