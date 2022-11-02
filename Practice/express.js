const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is home page");
});

app.post("/", (req, res) => {
  console.log(req.body.name);
  res.send("this is home page with post method");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
