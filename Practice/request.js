const express = require("express");

const app = express();

app.get("/user/:id", (req, res) => {
  console.log(req.baseUrl);
  res.send("hello");
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
