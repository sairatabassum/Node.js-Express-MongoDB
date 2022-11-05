const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  res.render("pages/about", {
    name: "Bangladesh",
  });
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
