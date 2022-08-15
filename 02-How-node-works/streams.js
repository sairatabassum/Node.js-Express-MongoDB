const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  ////////////////////////////
  //   Solution 2: Streams
  //   const redable = fs.createReadStream("test-file.txt");
  //   redable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   redable.on("end", () => {
  //     res.end();
  //   });
  //   redable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found");
  //   });
  /////////////////////////////////
  // Solution 3
  const redable = fs.createReadStream("test-file.txt");
  redable.pipe(res);
  //   ReadableSource.pipe(writable)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening...");
});
