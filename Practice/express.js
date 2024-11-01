const express = require("express");

const app = express();

app.use(express.json()); // express.raw(), express.text(), express.text(), express.urlencoded()

// express.Router(),express.static()

app.locals.title = "My App";

app.enable("case sensitive routing");
app.disable("case sensitive routing");

app.get("/", (req, res) => {
  res.send("this is home page");
});

app.post("/about", (req, res) => {
  console.log(req.body.name);
  res.send("this is home page with post method");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
