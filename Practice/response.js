const express = require("express");

const app = express();

app.get("/about", (req, res) => {
  res.send("about page");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});